// components/marketing/faq-section.tsx
const faqs = [
  {
    q: "Is my data stored locally or in the cloud?",
    a: "By default, Tally Budget stores your data locally on your device. If you choose to upgrade to Tally Premium, you can enable secure cloud sync and backup.",
  },
  {
    q: "Will there be a web app?",
    a: "Yes. Tally Budget is starting on mobile, with a web app planned so you can review budgets and analytics from your browser.",
  },
  {
    q: "Can I import receipts or bank statements?",
    a: "Tally Budget supports receipt scanning via image or screenshot, so you can spend less time typing and more time deciding. (Premium Users Only) We do not currently support bank statement import",
  },
  {
    q: "Do I need to link my bank account?",
    a: "No. Tally works great with manual entry and imports. Bank connections may be added later, but will always be optional.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Questions, meet answers.
          </h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Here are some common questions about Tally Budget. You can always
            reach out if you need more details.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5"
            >
              <h3 className="text-sm font-semibold text-gray-900">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
