import { faqCategories } from "@/data/faq";

export function FAQJsonLd() {
  const mainEntity = faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      // Google recommends embedding JSON-LD directly in the page as a string
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
