// app/page.tsx
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { HeroSection } from "@/components/marketing/hero";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { DownloadSection } from "@/components/marketing/download-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeatureGrid />
        <PricingSection />
        <FAQSection />
        <DownloadSection/>
      </main>
      <SiteFooter />
    </div>
  );
}
