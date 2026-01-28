import { FAQPage } from "@/components/marketing/faq-page";
import { FAQJsonLd } from "@/components/marketing/faq-jsonId";
// app/faq/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Tally Budget, including privacy, cloud sync, pricing, and how the app works.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQ() {
  return (
    <>
      <FAQJsonLd />
      <FAQPage />
    </>
  );
}
