// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://tallybudget.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Tally Budget",
    template: "%s | Tally Budget",
  },

  description:
    "Simple budgeting without the overwhelm. Track spending fast, set category budgets, and keep your data private.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Optional: be explicit about snippets
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Tally Budget",
    title: "Tally Budget",
    description:
      "Simple budgeting without the overwhelm. Track spending fast, set category budgets, and keep your data private.",
    // Add once you have it:
    // images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tally Budget" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tally Budget",
    description:
      "Simple budgeting without the overwhelm. Track spending fast, set category budgets, and keep your data private.",
    // images: ["/og.png"],
  },

  // Optional but recommended if you have favicons set up:
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
