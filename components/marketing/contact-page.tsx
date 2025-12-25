"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

const SUPPORT_EMAIL = "support@tallybudget.com"; // TODO: replace with your real address

type Topic = "billing" | "feature" | "bug" | "general";

const topicLabels: Record<Topic, string> = {
  billing: "Billing & subscription",
  feature: "Feature request",
  bug: "Bug report",
  general: "General question",
};

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<Topic | "">("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    }

    // Name optional but encouraged
    if (!name.trim()) {
      newErrors.name = "Name is helpful, but optional.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(false);

    if (!validate()) {
      return;
    }

    const selectedTopicLabel =
      topic && topic in topicLabels
        ? topicLabels[topic as Topic]
        : "Other";

    const subject = `Tally Budget: ${selectedTopicLabel}`;

    const lines = [
      `Name: ${name || "(not provided)"}`,
      `Email: ${email}`,
      `Topic: ${selectedTopicLabel}`,
      "",
      "Message:",
      message,
      "",
      "----",
      "Context (automatically included):",
      `Page: ${typeof window !== "undefined" ? window.location.href : ""}`,
      `Browser: ${
        typeof navigator !== "undefined" ? navigator.userAgent : ""
      }`,
    ];

    const body = encodeURIComponent(lines.join("\n"));

    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Contact us
          </h1>
          <p className="mt-2 text-gray-600">
            Have a question about Tally Budget, billing, or a feature request?
            Send us a message and we&apos;ll get back to you as soon as we can.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            You can also email us directly at{" "}
            <Link
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-[#00C853] hover:underline"
            >
              {SUPPORT_EMAIL}
            </Link>
            .
          </p>

          <form
            className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-gray-50/60 p-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#00C853] focus:outline-none focus:ring-1 focus:ring-[#00C853]"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-gray-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#00C853] focus:outline-none focus:ring-1 focus:ring-[#00C853]"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700"
              >
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value as Topic | "")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#00C853] focus:outline-none focus:ring-1 focus:ring-[#00C853]"
              >
                <option value="">Select a topic (optional)</option>
                <option value="billing">Billing & subscription</option>
                <option value="feature">Feature request</option>
                <option value="bug">Bug report</option>
                <option value="general">General question</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#00C853] focus:outline-none focus:ring-1 focus:ring-[#00C853]"
                placeholder="Tell us how we can help..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#00C853] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90"
            >
              Send message
            </button>

            <p className="text-xs text-gray-500">
              This form opens your email app with a pre-filled message addressed
              to our support team. You&apos;ll be able to review and send it
              from there.
            </p>

            {submitted && (
              <p className="mt-2 text-xs font-medium text-green-700">
                We&apos;ve opened your email app with your message. Once you hit
                send, we&apos;ll receive your request.
              </p>
            )}
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
