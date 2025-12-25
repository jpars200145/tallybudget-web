import { faqCategories } from "@/data/faq";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import Link from "next/link";


export function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="mt-2 text-gray-600">
  Find answers organized by category. Can’t find what you need?{" "}
  <Link
    href="/contact"
    className="font-medium text-[#00C853] hover:underline"
  >
    Contact us
  </Link>{" "}
  anytime.
</p>

          </div>

          <div className="flex flex-col gap-8 md:flex-row">
            {/* Sidebar nav (desktop) */}
            <aside className="md:w-56 md:shrink-0">
              <div className="sticky top-24 hidden rounded-2xl border border-gray-200 bg-gray-50/80 p-4 text-sm text-gray-700 md:block">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Categories
                </p>
                <nav className="space-y-2">
                  {faqCategories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="block rounded-md px-2 py-1 hover:bg-white hover:text-gray-900"
                    >
                      {category.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile category pills */}
              <div className="mb-4 flex flex-wrap gap-2 md:hidden">
                {faqCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {category.title}
                  </a>
                ))}
              </div>
            </aside>

            {/* Main FAQ content */}
            <div className="flex-1 space-y-12">
              {faqCategories.map((category) => (
                <section key={category.id} id={category.id}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h2>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50/70 px-4">
                    {category.faqs.map((faq) => (
                      <FAQAccordion
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
