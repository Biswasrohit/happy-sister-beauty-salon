"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CAL_UI_CONFIG } from "@/lib/cal-embed";

interface CalBookingProps {
  readonly calLink: string;
}

export function CalBooking({ calLink }: CalBookingProps) {
  useEffect(() => {
    async function configureCal() {
      const cal = await getCalApi({ namespace: "inline" });
      cal("ui", CAL_UI_CONFIG);
    }
    configureCal();
  }, []);

  return (
    <Cal
      namespace="inline"
      calLink={calLink}
      config={{ layout: "month_view" }}
      style={{ width: "100%", height: "100%", overflow: "auto", minHeight: 500 }}
    />
  );
}
