import Image from "next/image";
import Link from "next/link";
import { IosWaitlistButton } from "@/components/IosWaitlistButton";

export function DownloadSection() {
  return (
    <section id="download" className="bg-white py-16 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Download Tally Budget
        </h2>
        <p className="mt-3 text-sm text-gray-600 md:text-base max-w-2xl mx-auto">
          Start budgeting smarter today. Track income, savings, and expenses —
          and always know your remaining monthly budget.
        </p>

        <div className="mt-8 flex justify-center items-center">
          <Link
            href="/go/play-store"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-90"
          >
            <Image
              src="/badges/google-play.svg"
              alt="Get it on Google Play"
              width={200}
              height={60}
              priority
            />
          </Link>

          <IosWaitlistButton />
        </div>

        <p className="mt-4 text-xs text-gray-500">
          iOS version coming in the future.
        </p>
      </div>
    </section>
  );
}
