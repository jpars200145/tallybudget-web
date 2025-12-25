const features = [
  {
    name: "Category-based budgets",
    description:
      "Create monthly budgets per category and group so your spending matches your priorities, not just your paycheck.",
  },
  {
    name: "Receipt scanning",
    description:
      "Snap a photo or screenshot and let Tally extract totals, dates, and merchant info for faster transaction entry.",
  },
  {
    name: "Local-first with cloud sync",
    description:
      "Keep your data on-device by default, then upgrade to Tally Premium for secure cloud sync and backup.",
  },
  {
    name: "Clear, actionable insights",
    description:
      "See where your money goes each month, which categories are trending up, and when you're near budget.",
  },
];

export function FeatureGrid() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Built for real-world budgeting, not spreadsheets.
          </h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Tally Budget is designed for people who want clarity without the
            overwhelm. It&apos;s fast to update and easy to trust.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-2xl border border-gray-100 bg-gray-50/60 p-5"
            >
              <h3 className="text-sm font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
