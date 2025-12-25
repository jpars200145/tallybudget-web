// config/site.ts
export type NavLink = {
  name: string;
  href: string;
};

export const siteConfig = {
  name: "Tally Budget",
  description:
    "Tally Budget helps you track spending, set smart budgets, and scan receipts with receipt import.",
  url: "https://tallybudget.com",
  mainNav: [
    { name: "Features", href: "/features" },
    { name: "FAQ", href: "/faq" },
    
  ] as NavLink[],
  footerLinks: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Contact", href: "/contact"}
  ] as NavLink[],
};
