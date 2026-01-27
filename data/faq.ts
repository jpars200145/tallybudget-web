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
        question: "How does Tally Premium billing work on Android?",
        answer:
          "Tally Premium is billed through Google Play. You can cancel anytime through the manage subscription button in the account settings screen. Your premium access will remain through the end of the billing period.",
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
        "No. Tally never sells or shares your financial data. Your information is yours, and it stays private.",
    },
    {
      question: "Does Tally track my activity or usage?",
      answer:
        "No. Tally does not track your usage or behavior. We don’t collect analytics or monitor how you use the app.",
    },
    {
      question: "Where is my data stored?",
      answer:
        "By default, all of your data is stored locally on your device. Nothing is uploaded or shared unless you choose to enable cloud backup.",
    },
    {
      question: "How does cloud sync work?",
      answer:
        "Cloud backup is optional and designed for users who want to sync their data across devices. When enabled, your data is encrypted and securely tied to your account.",
    },
    {
      question: "Will Tally add tracking in the future?",
      answer:
        "If analytics are ever introduced, they will be optional and opt-in. You’ll always be in control of what data is shared, and why.",
    },
  ],
}

];
