"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

type Platform = "android" | "ios" | "desktop";

function getMaxTouchPoints(): number {
  if (typeof navigator === "undefined") return 0;
  const nav = navigator as Navigator & { maxTouchPoints?: number };
  return typeof nav.maxTouchPoints === "number" ? nav.maxTouchPoints : 0;
}

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent.toLowerCase();

  const isIOS =
    /iphone|ipad|ipod/.test(ua) ||
    (ua.includes("mac") && getMaxTouchPoints() > 1);

  if (isIOS) return "ios";
  if (ua.includes("android")) return "android";
  return "desktop";
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Optional: lightweight QR via external image service.
 * If you prefer fully local, remove this or swap to a QR library later.
 */
function QrCode({ url }: { url: string }) {
  const qrSrc = useMemo(() => {
    const encoded = encodeURIComponent(url);
    return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encoded}`;
  }, [url]);

  return (
    <div className="mt-6 flex flex-col items-center">
      <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qrSrc}
          alt="QR code to download Tally Budget"
          width={180}
          height={180}
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Scan to open Google Play on your phone
      </p>
    </div>
  );
}

export default function GetTheAppPage() {
  // TODO: Replace with your real Play Store URL
  const playUrl =
    "https://play.google.com/store/apps/details?id=com.tallybudget.app";

  const iosComingSoon = true;

  // ✅ No setState-in-effect: compute once on mount
  const platform = useMemo<Platform>(() => {
    if (typeof window === "undefined") return "desktop";
    return detectPlatform();
  }, []);

  const [copied, setCopied] = useState(false);

  const primaryBg = "bg-[#00C853]";

  return (
    <main className="bg-white">
      <SiteHeader/>
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                Mobile-first budgeting
              </p>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Get Tally Budget
              </h1>

              <p className="mt-4 max-w-xl text-base text-gray-600 md:text-lg">
                Download the mobile app to sign in and start tracking spending,
                income, savings, and monthly budgets — without the overwhelm.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition hover:opacity-90"
                  aria-label="Get Tally Budget on Google Play"
                >
                  <Image
                    src="/badges/google-play.svg"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    priority
                  />
                </Link>

                <button
                  type="button"
                  onClick={async () => {
                    const ok = await copyToClipboard(playUrl);
                    setCopied(ok);
                    setTimeout(() => setCopied(false), 1800);
                  }}
                  className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 transition hover:bg-gray-50"
                >
                  {copied ? "Link copied" : "Copy Play Store link"}
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                {platform === "android" &&
                  "You’re on Android — the Play Store link is ready."}
                {platform === "ios" &&
                  "You’re on iOS — the iOS version isn’t available yet."}
                {platform === "desktop" &&
                  "On desktop? Use the badge or scan the QR code below."}
              </p>

              {platform === "desktop" && <QrCode url={playUrl} />}

              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h2 className="text-sm font-semibold text-gray-900">
                  Why no web login?
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Tally is currently mobile-first. Web access may come later —
                  for now, downloading the app is the best way to get started.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                What you get
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span
                    className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${primaryBg}`}
                  >
                    ✓
                  </span>
                  Fast entry: add an expense in a few taps
                </li>
                <li className="flex gap-3">
                  <span
                    className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${primaryBg}`}
                  >
                    ✓
                  </span>
                  Monthly budgets + clear remaining amount
                </li>
                <li className="flex gap-3">
                  <span
                    className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${primaryBg}`}
                  >
                    ✓
                  </span>
                  Simple categories and spending awareness
                </li>
                <li className="flex gap-3">
                  <span
                    className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${primaryBg}`}
                  >
                    ✓
                  </span>
                  Privacy-minded: no confusing dashboards required
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h4 className="text-sm font-semibold text-gray-900">iOS</h4>
                <p className="mt-1 text-sm text-gray-600">
                  {iosComingSoon
                    ? "Coming later. For now, Tally is available on Android via Google Play."
                    : "Download on the App Store."}
                </p>
              </div>

              <div className="mt-8 text-xs text-gray-500">
                Need help?{" "}
                <Link
                  href="/support"
                  className="font-medium text-gray-700 underline underline-offset-4"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Fast to start
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Install, open, and log your first transaction in under a minute.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                No overwhelm
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Clear totals and monthly budget awareness without complex setup.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Mobile-first
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Web login isn’t enabled yet — the app is the primary experience
                today.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter/>
    </main>
  );
}
