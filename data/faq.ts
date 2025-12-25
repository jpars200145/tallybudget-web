export type FAQ = {
  question: string;
  answer: string;
};

export type FAQCategory = {
  id: string;
  title: string;
  faqs: FAQ[];
};

export const faqCategories: FAQCategory[] = [
  {
    id: "billing",
    title: "Billing & Subscription",
    faqs: [
      {
        question: "How does Tally Premium billing work?",
        answer:
          "Tally Premium is billed monthly through the Stripe. You can cancel anytime through the manage subscription button in the account settings screen. Your premium access will remain through the end of the billing period.",
      },
      {
        question: "What happens if my payment fails?",
        answer:
          "If a payment fails, your subscription may enter a grace period. If it cannot be processed after several attempts, Premium features will be disabled.",
      },
    ],
  },
  {
    id: "features",
    title: "App Features & Functionality",
    faqs: [
      {
        question: "How does receipt scanning work?",
        answer:
          "Tally uses on-device OCR to extract totals, dates, and merchant names from your receipts. You can correct anything before saving.",
      },
      {
        question: "Is my data stored locally or in the cloud?",
        answer:
          "By default, your data is stored locally on your device. Premium users can enable secure cloud sync to keep data backed up across devices. Tally collects anonymous usage data to improve features.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    faqs: [
      {
        question: "Does Tally sell or share my data?",
        answer:
          "No. Tally never sells or shares your financial data. Cloud sync is encrypted and tied directly to your user account.",
      },
    ],
  },
];
