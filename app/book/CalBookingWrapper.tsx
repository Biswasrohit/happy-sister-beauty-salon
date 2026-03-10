"use client";

import { CalBooking } from "@/components/CalBooking";
import { CAL_USERNAME } from "@/lib/cal-config";

export function CalBookingWrapper() {
  return <CalBooking calLink={CAL_USERNAME} />;
}
