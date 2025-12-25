import Link from "next/link";

export function HeroSection() {
  return (
    <section className="border-b border-gray-100 bg-linear-to-b from-white to-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 md:flex-row md:py-20">
        {/* Left side: marketing copy */}
        <div className="flex-1 space-y-6">
          <p className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Built for real-world budgeting
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Take control of your money with{" "}
            <span className="text-[#00C853]">Tally Budget</span>.
          </h1>
          <p className="max-w-xl text-base text-gray-600 sm:text-lg">
            Track income, savings, and expenses in one place. Tally Budget
            keeps a running total of what&apos;s left in your monthly budget so
            you always know where you stand.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#download"
              scroll={true}
              className="rounded-full bg-[#00C853] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90"
            >
              Get the app
            </Link>
            <a
              href="#pricing"
              className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-100"
            >
              View pricing
            </a>
          </div>

          <ul className="mt-4 space-y-1 text-sm text-gray-600">
            <li>• Clear monthly view of income, savings, and expenses</li>
            <li>• Remaining budget updated as you add transactions</li>
            <li>• Local-first with optional secure cloud sync</li>
          </ul>
        </div>

        {/* Right side: summary card that matches the app */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                December 2025
              </p>
              <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-[#00C853]">
                On track
              </span>
            </div>

            {/* Summary lines */}
            <SummaryLine label="Income" value="$5,000.00" />
            <SummaryLine label="Savings" value="$120.00" />
            <SummaryLine label="Expenses" value="$2,500.00" />

            {/* Divider like in the app */}
            <div className="my-3 h-px w-full bg-gray-200" />

            {/* Remaining */}
            <SummaryLine
              label="Remaining"
              value="$2,280.00"
              highlight
            />
          </div>

          {/* Budget Overview under the card */}
          <div className="mx-auto mt-6 max-w-md rounded-3xl bg-white/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Budget overview
            </p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              Budgeted vs income
            </p>
            <p className="mt-1 text-xs text-gray-600">
              $3,000.00 / $5,000.00
            </p>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-[#00C853]"
                style={{ width: "58%" }}
              />
            </div>
          </div>

          <p className="mx-auto mt-3 max-w-md text-xs text-gray-500">
            Demo data for illustration only. Tally Budget keeps your real data
            private and secure.
          </p>
        </div>
      </div>
    </section>
  );
}

function SummaryLine({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between py-1.5">
      <p className="text-sm text-gray-700">{label}</p>
      <p
        className={
          "text-sm font-semibold tabular-nums " +
          (highlight ? "text-[#00C853]" : "text-gray-900")
        }
      >
        {value}
      </p>
    </div>
  );
}
