import { NextResponse } from "next/server";

/**
 * Forwards contact submissions server-side to the business's existing
 * Contact Form 7 endpoint (form ID 377 on marbellapoolservice.com), so
 * enquiries keep arriving at info@infinitybrand.es through the system
 * the company already uses. No credentials involved; CORS does not
 * apply server-side.
 */

const CF7_ENDPOINT =
  "https://marbellapoolservice.com/wp-json/contact-form-7/v1/contact-forms/377/feedback";

type Payload = {
  name?: string;
  phone?: string;
  city?: string;
  email?: string;
  service?: string;
  message?: string;
  privacy?: boolean;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const city = (body.city ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !phone || !city || !email || !message || body.privacy !== true) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const form = new FormData();
  form.set("_wpcf7", "377");
  form.set("_wpcf7_version", "6.1.7");
  form.set("_wpcf7_locale", "es_ES");
  form.set("_wpcf7_unit_tag", "wpcf7-f377-p368-o1");
  form.set("_wpcf7_container_post", "368");
  form.set("your-name", name);
  form.set("your-phone", phone);
  form.set("poblacion", city);
  form.set("your-email", email);
  form.set("servicio", body.service ?? "");
  form.set("mensaje", message);
  form.set("privacy", "1");

  try {
    const res = await fetch(CF7_ENDPOINT, {
      method: "POST",
      body: form,
      signal: AbortSignal.timeout(12000),
    });
    const data = (await res.json()) as { status?: string; message?: string };
    if (data.status === "mail_sent") {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { ok: false, error: "upstream", detail: data.status ?? "unknown" },
      { status: 502 }
    );
  } catch {
    return NextResponse.json({ ok: false, error: "unreachable" }, { status: 502 });
  }
}
