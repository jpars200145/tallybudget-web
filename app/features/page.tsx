import { FeaturesPage } from "@/components/marketing/features-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Tally Budget features including fast expense tracking, category budgets, receipt import, and optional cloud sync—designed to keep budgeting simple.",
  alternates: {
    canonical: "/features",
  },
};

export default function Features() {
  return <FeaturesPage />;
}
