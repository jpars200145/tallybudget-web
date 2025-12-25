"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const primaryColor = "text-[#00C853]";
const primaryBg = "bg-[#00C853]";

function TallyLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Tally logo"
      className="h-10 w-10 shrink-0"
    >
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#333333" />
      <g
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <line x1="24" y1="16" x2="18" y2="48" />
        <line x1="34" y1="16" x2="28" y2="48" />
        <line x1="44" y1="16" x2="38" y2="48" />
        <line x1="12" y1="40" x2="50" y2="25" />
      </g>
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <TallyLogo />
          <span className="text-lg font-semibold tracking-tight">
            Tally Budget
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          {siteConfig.mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? `${primaryColor} underline underline-offset-4`
                    : "hover:text-gray-900"
                }
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Log in
          </Link>
          <Link
            href="#download"
            scroll={true}
            className={`rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm ${primaryBg} hover:opacity-90`}
          >
            Get app
          </Link>
        </div>
      </div>
    </header>
  );
}
