import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {siteConfig.footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
