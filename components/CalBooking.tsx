"use client";

import { useEffect, useId } from "react";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & { loaded?: boolean };
  }
}

interface CalBookingProps {
  readonly calLink: string;
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

export function CalBooking({ calLink }: CalBookingProps) {
  const reactId = useId();
  const containerId = `cal-embed-${reactId.replace(/:/g, "")}`;

  useEffect(() => {
    let cancelled = false;

    ensureCalScript()
      .then(() => {
        if (cancelled || !window.Cal) return;

        window.Cal("init", { origin: "https://app.cal.com" });
        window.Cal("inline", {
          elementOrSelector: `#${containerId}`,
          calLink,
          layout: "month_view",
        });
        window.Cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#E87461" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })
      .catch((err: unknown) => {
        console.error("Cal.com embed failed to load:", err);
      });

    return () => {
      cancelled = true;
    };
  }, [calLink, containerId]);

  return (
    <div
      id={containerId}
      style={{ width: "100%", height: "100%", overflow: "auto", minHeight: 500 }}
    />
  );
}
