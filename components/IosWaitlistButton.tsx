"use client";

import { useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebaseClient";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function IosWaitlistButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return status !== "saving" && isValidEmail(email);
  }, [email, status]);

  async function submit() {
    setErrorMsg(null);

    const cleaned = email.trim().toLowerCase();
    if (!isValidEmail(cleaned)) {
      setErrorMsg("Please enter a valid email.");
      return;
    }

    // Honeypot
    if (honeypot.trim().length > 0) {
      setStatus("success");
      return;
    }

    try {
      setStatus("saving");

      await addDoc(collection(db, "waitlist"), {
        email: cleaned,
        platformInterest: "ios",
        source: "website",
        status: "subscribed",
        createdAt: serverTimestamp(),
      });

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {/* Polished CTA Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="ml-3 inline-flex items-center justify-center rounded-2xl bg-[#333333] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.03] hover:bg-black"
      >
        Join iOS Early Access
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
            {status === "success" ? (
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00C853]/10">
                  <span className="text-2xl">✅</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  You&apos;re on the list.
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  We&apos;ll email you when iOS early access is available.
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 w-full rounded-2xl bg-[#00C853] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Got it
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900">
                  Be first to use Tally on iOS
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Join the early access list and get notified when TestFlight opens.
                </p>

                <div className="mt-6">
                  <label className="text-xs font-semibold text-gray-700">
                    Email address
                  </label>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#00C853]"
                    autoComplete="email"
                  />

                  {/* Honeypot */}
                  <div className="absolute left-[-9999px]">
                    <input
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  {errorMsg && (
                    <p className="mt-2 text-xs text-red-600">{errorMsg}</p>
                  )}
                </div>

                <button
                  onClick={submit}
                  disabled={!canSubmit}
                  className="mt-6 w-full rounded-2xl bg-[#00C853] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
                >
                  {status === "saving" ? "Joining…" : "Join Early Access"}
                </button>

                <p className="mt-4 text-xs text-gray-500">
                  No spam. Only iOS launch updates.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}