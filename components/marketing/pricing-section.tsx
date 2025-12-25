import Link from "next/link";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-b border-gray-100 bg-gray-50/80 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Start with the free version and upgrade anytime to unlock secure
            cloud sync and advanced budgeting features.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Free plan */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-gray-900">Free</h3>
            <p className="mt-1 text-xs text-gray-500">
              Everything you need to start budgeting confidently.
            </p>
            <p className="mt-4 text-3xl font-bold text-gray-900">
              $0
              <span className="text-base font-normal text-gray-500">
                / forever
              </span>
            </p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-gray-600">
              <li>• Unlimited manual transactions</li>
              <li>• Category and group-based budgets</li>
              <li>• Local-only data (stored on your device)</li>
            </ul>
          </div>

          {/* Premium plan */}
          <div className="flex flex-col rounded-2xl border-2 border-[#00C853] bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900">
              Tally Premium
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Built for users who want sync, backup, and deeper insights.
            </p>

            <p className="mt-4 text-3xl font-bold text-gray-900">
              $5.00
              <span className="text-base font-normal text-gray-500">
                / month
              </span>
            </p>

            <ul className="mt-4 flex-1 space-y-2 text-sm text-gray-600">
              <li>• Everything in Free</li>
              <li>• Optional Secure cloud sync across devices</li>
              <li>• Receipt Scanning</li>
              <li>• Advanced analytics and trends</li>
              <li>• Priority support</li>
            </ul>

            <Link
              href="#download"
              scroll={true}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#00C853] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90"
            >
              Get the app
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
