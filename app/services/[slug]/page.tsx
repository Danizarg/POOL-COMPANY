import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { serviceContent } from "@/lib/service-content";
import { services, SITE_URL, contact } from "@/lib/site";
import type { ServiceSlug } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = serviceContent[slug as ServiceSlug];
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      images: [{ url: content.heroImage }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = serviceContent[slug as ServiceSlug];
  if (!content) notFound();

  const meta = services.find((s) => s.slug === content.slug)!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: meta.title,
        description: content.metaDescription,
        areaServed: "Costa del Sol, Málaga, Spain",
        provider: {
          "@type": "LocalBusiness",
          name: contact.companyName,
          telephone: contact.phones[0].display,
          email: contact.email,
        },
        url: `${SITE_URL}/services/${content.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: meta.title,
            item: `${SITE_URL}/services/${content.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage content={content} />
    </>
  );
}
