import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy of Marbella Pool Service (Infinity Concepts 2000 S.L.).",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy">
      <h2>What cookies are</h2>
      <p>
        Cookies are small files stored on your device when you visit a
        website. They can be used to make the site work, to remember your
        preferences or to measure how the site is used.
      </p>
      <h2>Cookies on this website</h2>
      <p>
        This website does not set advertising or profiling cookies. Only
        technical storage strictly necessary for the site to function may be
        used. If analytics or other non-essential cookies are introduced in
        the future, they will only be set with your prior consent and this
        policy will be updated.
      </p>
      <h2>Managing cookies</h2>
      <p>
        You can delete or block cookies at any time through your browser
        settings. Blocking technical cookies may affect how the site works.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy: {" "}
        <a href="mailto:info@infinitybrand.es">info@infinitybrand.es</a>.
      </p>
    </LegalPage>
  );
}
