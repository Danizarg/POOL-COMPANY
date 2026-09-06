/**
 * One-off asset preparation: derives the mobile hero crop and caps
 * oversized source photos at 1920px so the repo ships lean originals.
 * Run: node scripts/prep-images.mjs
 */
import sharp from "sharp";
import { readdir, stat, rename } from "node:fs/promises";
import path from "node:path";

const IMG = path.resolve("public/images");

// 1. Mobile hero: vertical slice of the drone shot — pure sparkling
//    water with palm shadows, no clutter.
const drone = path.join(IMG, "covers/drone.jpg");
await sharp(drone)
  .extract({ left: 380, top: 0, width: 1180, height: 1707 })
  .resize(900, 1302)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(IMG, "hero-mobile.jpg"));
console.log("hero-mobile.jpg written");

// 2. Cap everything else at 1920px on the long edge.
async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

for await (const file of walk(IMG)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const meta = await sharp(file).metadata();
  const long = Math.max(meta.width ?? 0, meta.height ?? 0);
  if (long <= 1920) continue;
  const before = (await stat(file)).size;
  const buf = await sharp(file)
    .resize({ width: 1920, height: 1920, fit: "inside" })
    .toFormat(meta.format === "png" ? "png" : meta.format === "webp" ? "webp" : "jpeg", {
      quality: 82,
      ...(meta.format === "jpeg" ? { mozjpeg: true } : {}),
    })
    .toBuffer();
  const tmp = `${file}.tmp${path.extname(file)}`;
  await sharp(buf).toFile(tmp);
  await rename(tmp, file);
  const after = (await stat(file)).size;
  console.log(
    `${path.relative(IMG, file)}: ${meta.width}x${meta.height} -> 1920 cap, ${(before / 1024) | 0}KB -> ${(after / 1024) | 0}KB`
  );
}
console.log("done");
