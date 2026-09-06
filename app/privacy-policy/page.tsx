import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy of Marbella Pool Service (Infinity Concepts 2000 S.L.).",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>Data controller</h2>
      <p>
        INFINITY Concepts 2000 S.L. (NIF B93727287), Centro Comercial LIDL
        (Parking), Local 9, 29649 Calahonda (Mijas Costa), Málaga, España.
        Email: <a href="mailto:info@infinitybrand.es">info@infinitybrand.es</a>.
      </p>
      <h2>What data we collect</h2>
      <p>
        When you use our contact form we collect the details you provide:
        name, phone number, city or town, email address, the service you are
        interested in and your message. When you call, email or message us
        on WhatsApp, we process the contact details you share with us.
      </p>
      <h2>Why we process it</h2>
      <ul>
        <li>To respond to your enquiry and prepare the quote you requested.</li>
        <li>To organise visits, works and maintenance you contract with us.</li>
        <li>To comply with legal and invoicing obligations.</li>
      </ul>
      <h2>Legal basis</h2>
      <p>
        Processing is based on the steps necessary to answer your request
        (pre-contractual measures), the performance of a contract, and
        compliance with legal obligations.
      </p>
      <h2>How long we keep it</h2>
      <p>
        Enquiry data is kept for as long as needed to handle your request.
        Contractual and invoicing data is kept for the periods required by
        Spanish law.
      </p>
      <h2>Sharing</h2>
      <p>
        We do not sell your data. It is shared only with providers needed to
        operate our services (such as hosting and email) and with public
        bodies where the law requires it.
      </p>
      <h2>Your rights</h2>
      <p>
        You may exercise your rights of access, rectification, erasure,
        restriction, portability and objection by writing to{" "}
        <a href="mailto:info@infinitybrand.es">info@infinitybrand.es</a>. You
        may also lodge a complaint with the Spanish Data Protection Agency
        (AEPD).
      </p>
    </LegalPage>
  );
}
