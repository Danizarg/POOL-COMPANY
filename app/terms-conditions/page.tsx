import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of Marbella Pool Service (Infinity Concepts 2000 S.L.).",
  alternates: { canonical: "/terms-conditions" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <h2>Website owner</h2>
      <p>
        This website is operated by INFINITY Concepts 2000 S.L. (NIF
        B93727287), Centro Comercial LIDL (Parking), Local 9, 29649
        Calahonda (Mijas Costa), Málaga, España. Email:{" "}
        <a href="mailto:info@infinitybrand.es">info@infinitybrand.es</a>.
      </p>
      <h2>Use of the website</h2>
      <p>
        The content of this website is provided for general information
        about our services. Using the site does not by itself create a
        contractual relationship. Quotes, works and maintenance plans are
        agreed individually and in writing.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The contents of this website — texts, photographs, brand marks and
        design — belong to INFINITY Concepts 2000 S.L. or are used with
        permission, and may not be reproduced without authorisation.
      </p>
      <h2>Liability</h2>
      <p>
        We work to keep the information on this site accurate and up to
        date, but it may contain errors or omissions. Service details,
        availability and coverage are confirmed in each written quote.
      </p>
      <h2>Applicable law</h2>
      <p>
        These terms are governed by Spanish law. Any dispute will be
        submitted to the competent courts of Málaga, Spain, unless a
        different forum is required by consumer law.
      </p>
    </LegalPage>
  );
}
