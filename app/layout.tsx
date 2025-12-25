// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tally Budget",
  description: "Smart budgeting with AI-powered receipt import, category budgets, and cloud sync.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
