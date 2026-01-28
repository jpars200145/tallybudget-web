// app/page.tsx
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { HeroSection } from "@/components/marketing/hero";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { DownloadSection } from "@/components/marketing/download-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Budgeting Without the Overwhelm",
  description:
    "Tally Budget is a simple budgeting app to track expenses, set category budgets, and stay in control of your money—without spreadsheets or stress.",
  alternates: {
    canonical: "/",
  },
};

const SITE_URL = "https://tallybudget.com";

function SoftwareAppJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tally Budget",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android, iOS",
    description:
      "Tally Budget is a simple budgeting app to track expenses, set category budgets, and stay in control of your money—without spreadsheets or stress.",
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SoftwareAppJsonLd />

      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeatureGrid />
        <PricingSection />
        <FAQSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </div>
  );
}
