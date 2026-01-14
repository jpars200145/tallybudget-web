"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {open ? (
        <>
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = useMemo(() => siteConfig.mainNav ?? [], []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <TallyLogo />
            <span className="text-lg font-semibold tracking-tight">
              Tally Budget
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            {navItems.map((item) => {
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

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Log in
            </Link>
            <Link
              href="#download"
              scroll
              className={`rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm ${primaryBg} hover:opacity-90`}
            >
              Get app
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>

        {/* Mobile panel */}
        <div className={`${open ? "block" : "hidden"} pb-4 md:hidden`}>
          <nav className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3 text-sm font-medium text-gray-800 shadow-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 hover:bg-gray-50 ${
                    active ? `${primaryColor} font-semibold` : ""
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="my-1 h-px bg-gray-200" />

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Log in
            </Link>
            <Link
              href="#download"
              scroll
              onClick={() => setOpen(false)}
              className={`mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm ${primaryBg} hover:opacity-90`}
            >
              Get app
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
