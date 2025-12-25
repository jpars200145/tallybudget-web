"use client";

import { useState } from "react";

export function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <p className="mt-2 text-sm text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
}
