import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { FeatureMedia } from "@/components/marketing/feature-media";

type FeatureSectionProps = {
  id: string;
  title: string;
  body: string;
  bullets: React.ReactNode;

  // Backwards compatible (existing)
  imageSrc?: string;
  imageAlt?: string;

  // New (preferred)
    // New (preferred)
  media?: {
    type: "image" | "video";
    src: string; // .png/.jpg OR .mp4
    poster?: string; // used for video poster and as image fallback
    alt?: string; // image alt

    // Slideshow support (optional; image only)
    slides?: Array<{ src: string; alt?: string }>;
    intervalMs?: number; // default 5000
    pauseOnHover?: boolean; // default true
    showControls?: boolean; // default true

    // In-view + scroll gating (optional)
    playOnlyWhenVisible?: boolean; // default true
    visibleThreshold?: number; // default 0.35
    rootMargin?: string; // default "0px"
    pauseOnScroll?: boolean; // default true
    scrollPauseMs?: number; // default 180
  };


  imageOnRight?: boolean;
};

const FEATURES: Omit<FeatureSectionProps, "imageOnRight">[] = [
  {
    id: "overview",
    title: "A clear monthly snapshot",
    body:
      "Tally's home screen keeps the most important numbers in one place: income, savings, expenses, and what's left in your budget for the month. As you add transactions, your remaining budget updates in real time.",
    bullets: (
      <>
        <FeatureBullet>
          Monthly summary card showing Income, Savings, Expenses, and Remaining.
        </FeatureBullet>
        <FeatureBullet>
          Overall budget progress bar so you can see how much of your income is
          already budgeted or spent.
        </FeatureBullet>
      </>
    ),
    media: {
      type: "image",
      src: "/media/overview.jpeg",
      alt: "Tally home screen showing monthly snapshot",
    },
  },
  {
    id: "budgeting",
    title: "Category-based budgeting that matches real life",
    body:
      "Instead of a single “spending limit,” Tally lets you create budgets for each category and category group. It's built for people who want to tell their money where to go ahead of time.",
    bullets: (
      <>
        <FeatureBullet>
          Set monthly budgets for categories like Groceries, Restaurants,
          Shopping, and more.
        </FeatureBullet>
        <FeatureBullet>
          Group categories (for example: “Essentials,” “Fun,” “Savings”) to see
          how bigger areas of your life are doing.
        </FeatureBullet>
        <FeatureBullet>
          See how much you’ve spent and how much is left in each budget.
        </FeatureBullet>
        <FeatureBullet>
          Near-budget indicators so you can adjust before you overspend.
        </FeatureBullet>
      </>
    ),
    media: {
      type: "image",
      src: "/media/budget-create.jpeg",
      slides: [
        { src: "/media/budget-create.jpeg" },
        { src: "/media/budget-group.jpeg" },
        { src: "/media/near-budget.jpeg"},
      ],
      intervalMs: 5000,
      pauseOnHover: true,
      playOnlyWhenVisible: true,
      pauseOnScroll: true,
    }
  },
  {
    id: "transactions",
    title: "Fast, structured transaction entry",
    body:
      "Adding a transaction in Tally is fast and structured. Every expense or income entry is tied to a category so reports and budgets stay accurate.",
    bullets: (
      <>
        <FeatureBullet>
          Simple forms for income and expenses with date, amount, category, and
          notes.
        </FeatureBullet>
        <FeatureBullet>
          Category suggestions to help you stay consistent over time.
        </FeatureBullet>
        <FeatureBullet>
          Full transaction history so you can review and edit past entries.
        </FeatureBullet>
      </>
    ),
    media: {
      type: "image",
      src: "/media/transcations-add.jpeg",
      slides: [
        { src: "/media/transcations-add.jpeg" },
        { src: "/media/transactions-list.jpeg" },
      ],
      intervalMs: 5000,
      pauseOnHover: true,
      playOnlyWhenVisible: true,
      pauseOnScroll: true,
    }

  },
  {
    id: "imports",
    title: "Receipt scanning & statement import",
    body: "Tally saves you time by helping you capture key details automatically, so you can log transactions faster and stay consistent.",
    bullets: (
      <>
        <FeatureBullet>Receipt scanning with OCR</FeatureBullet>
        <FeatureBullet>
          Import statements and convert them into categorized transactions
        </FeatureBullet>
      </>
    ),
    media: {
      type: "video",
      src: "/media/receipt-scan.mp4",
      poster: "/media/receipt-scan-poster.jpg",
      alt: "Receipt scanning automatically detects total and merchant",
    },
  },
  {
    id: "sync",
    title: "Local-first with optional cloud sync",
    body:
      "Tally starts as a fully local budgeting app — your data lives on your device. When you're ready, Tally Premium adds secure cloud sync and backup.",
    bullets: (
      <>
        <FeatureBullet>
          Local-only mode by default: your budgeting data stays on your device.
        </FeatureBullet>
        <FeatureBullet>
          Tally Premium: enable cloud sync to keep data backed up and ready for
          future multi-device access.
        </FeatureBullet>
      </>
    ),
    media: {
      type: "image",
      src: "/media/sync.jpeg",
      alt: "Cloud sync settings and status in Tally",
    },
  },
  {
    id: "analytics",
    title: "Insights that actually make sense",
    body:
      "Tally's analytics are designed to answer practical questions: Where is my money going? Which categories are trending up? How did this month compare to last month?",
    bullets: (
      <>
        <FeatureBullet>
          Category breakdowns so you can see where your spending is concentrated.
        </FeatureBullet>
        <FeatureBullet>
          Month-over-month views to spot trends and changes over time.
        </FeatureBullet>
      </>
    ),
    media: {
      type: "image",
      src: "/media/analytics.jpeg",
      alt: "Spending analytics charts in Tally",
    },
  },
  {
    id: "privacy",
    title: "Built with privacy in mind",
    body:
      "Your budgeting data is sensitive. Tally is designed to respect that — with local-first storage and encrypted sync when you choose to enable it.",
    bullets: (
      <>
        <FeatureBullet>
          Local-only by default for maximum control over your data.
        </FeatureBullet>
        <FeatureBullet>
          Cloud sync (for Premium users) uses secure, encrypted storage.
        </FeatureBullet>
        <FeatureBullet>We don&apos;t sell your financial data.</FeatureBullet>
      </>
    ),
  },
];

export function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          {/* Page heading */}
          <header className="mb-10 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              What you can do with Tally Budget
            </h1>
            <p className="mt-3 text-sm text-gray-600 md:text-base">
              Tally Budget is built to give you a clear picture of your money
              without overwhelming you. Here&apos;s how it helps you track,
              plan, and stay on top of your budget.
            </p>

            <div className="mt-5">
              <Link
                href="#download"
                className="inline-flex items-center rounded-full bg-[#00C853] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90"
              >
                Get App
              </Link>
            </div>
          </header>

          {/* Feature sections */}
          <div className="space-y-12">
            {FEATURES.map((f, idx) => (
              <FeatureSection
                key={f.id}
                {...f}
                // alternate layout automatically
                imageOnRight={idx % 2 === 0}
              />
            ))}

            {/* Final CTA */}
            <section className="border-t border-gray-200 pt-8">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Ready to give Tally a try?
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Start with the free version, and upgrade to Premium when you
                    want sync and advanced features.
                  </p>
                </div>
                <Link
                  href="#download"
                  className="inline-flex items-center rounded-full bg-[#00C853] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90"
                >
                  Get App
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function FeatureBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00C853]" />
      <span>{children}</span>
    </li>
  );
}

function FeatureSection({
  id,
  title,
  body,
  bullets,
  imageSrc,
  imageAlt,
  media,
  imageOnRight = true,
}: FeatureSectionProps) {
  const content = (
    <div>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-600 md:text-base">{body}</p>
      <ul className="mt-4 grid gap-3 text-sm text-gray-700 md:grid-cols-2">
        {bullets}
      </ul>
    </div>
  );

  const resolvedMedia =
    media ??
    (imageSrc
      ? { type: "image" as const, src: imageSrc, alt: imageAlt ?? title }
      : undefined);

  const mediaEl = resolvedMedia ? (
    <FeatureMedia
      title={title}
      media={resolvedMedia}
      fallbackAlt={imageAlt ?? title}
    />
  ) : null;

  return (
    <section id={id} className="py-6">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        {imageOnRight ? (
          <>
            {content}
            {mediaEl}
          </>
        ) : (
          <>
            {mediaEl}
            {content}
          </>
        )}
      </div>
    </section>
  );
}
