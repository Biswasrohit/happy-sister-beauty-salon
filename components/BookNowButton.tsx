"use client";

import { useEffect, type ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_UI_CONFIG } from "@/lib/cal-embed";

interface BookNowButtonProps {
  readonly calLink: string;
  readonly children: ReactNode;
  readonly className?: string;
}

export function BookNowButton({ calLink, children, className }: BookNowButtonProps) {
  useEffect(() => {
    async function configureCal() {
      const cal = await getCalApi({ namespace: "popup" });
      cal("ui", CAL_UI_CONFIG);
    }
    configureCal();
  }, []);

  return (
    <button
      className={className}
      data-cal-namespace="popup"
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </button>
  );
}
