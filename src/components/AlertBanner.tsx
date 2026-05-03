"use client";

import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[var(--color-primary)] text-white px-4 py-3 shadow-md relative z-40">
      <div className="max-w-6xl mx-auto flex items-start sm:items-center gap-3 pr-8">
        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0 text-[var(--color-accent)]" />
        <p className="text-sm sm:text-base leading-tight">
          <strong className="font-semibold tracking-wide">Important Notice:</strong> From May 5th, Ballina Shire Council will temporarily operate the Alstonville Library from the Hall. Hall bookings are limited, subject to Council approval, and parties are no longer permitted.
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-3 sm:top-1/2 sm:-translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Dismiss alert"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
