"use client";

import { useEffect, type ReactNode } from "react";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & { loaded?: boolean };
  }
}

interface BookNowButtonProps {
  readonly calLink: string;
  readonly children: ReactNode;
  readonly className?: string;
}

function ensureCalScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Cal?.loaded) {
      resolve();
      return;
    }

    const existing = document.querySelector(
      'script[src="https://app.cal.com/embed/embed.js"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      if (window.Cal) resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load Cal.com embed script"));
    document.head.appendChild(script);
  });
}

export function BookNowButton({ calLink, children, className }: BookNowButtonProps) {
  useEffect(() => {
    let cancelled = false;

    ensureCalScript()
      .then(() => {
        if (cancelled || !window.Cal) return;

        window.Cal("init", { origin: "https://app.cal.com" });
        window.Cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#E87461" },
          },
        });
      })
      .catch((err: unknown) => {
        console.error("Cal.com embed failed to load:", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <button
      className={className}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </button>
  );
}
