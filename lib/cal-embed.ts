/**
 * Shared Cal.com embed UI configuration.
 * Used by both the inline calendar (CalBooking) and popup buttons (BookNowButton).
 */

export const CAL_UI_CONFIG = {
  cssVarsPerTheme: {
    light: { "cal-brand": "#E87461" },
    dark: { "cal-brand": "#E87461" },
  },
  hideEventTypeDetails: false,
  layout: "month_view" as const,
} as const;
