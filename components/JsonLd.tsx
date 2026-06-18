import { BUSINESS_INFO } from "@/constants/data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BUSINESS_INFO.baseUrl}/#organization`,
        "name": BUSINESS_INFO.name,
        "url": BUSINESS_INFO.baseUrl,
        "email": BUSINESS_INFO.email,
        "sameAs": [`https://instagram.com/${BUSINESS_INFO.instagram}`]
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BUSINESS_INFO.baseUrl}/#localbusiness`,
        "name": BUSINESS_INFO.name,
        "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600",
        "url": BUSINESS_INFO.baseUrl,
        "telephone": `+${BUSINESS_INFO.phone}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Seminyak, Kuta",
          "addressLocality": "Badung",
          "addressRegion": "Bali",
          "addressCountry": "ID"
        },
        "priceRange": "$$"
      },
      {
        "@type": "ProfessionalService",
        "name": BUSINESS_INFO.name,
        "description": "Premium Entertainment & Agency Penyedia Talent Profesional Terbaik di Bali.",
        "url": BUSINESS_INFO.baseUrl
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}