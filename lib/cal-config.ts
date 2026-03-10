/**
 * Cal.com booking configuration.
 *
 * Replace CAL_USERNAME with your Cal.com username after creating your account.
 * Optionally, create slug-based event types for each service
 * (e.g., "happy-sister-salon/haircut") so "Book Now" buttons on service cards
 * deep-link directly to the right service.
 */

export const CAL_USERNAME =
  process.env.NEXT_PUBLIC_CAL_USERNAME ?? "rbiswas";

/**
 * Map service IDs to Cal.com event-type slugs.
 * Only services with a matching entry here will show a direct "Book" button.
 * Services without an entry will link to the main booking page.
 *
 * Example after setting up Cal.com event types:
 *   "haircut": "haircut",
 *   "haircut-blowout": "haircut-and-blowout",
 */
export const SERVICE_CAL_SLUGS: Readonly<Record<string, string>> = {
  "haircut": "hair-cut",
  "wash-blowdry": "wash-blowdry",
  "color-root": "color-hair-root",
  "color-whole": "color-whole-hair",
  "highlight": "highlight",
  "curly-perm": "curly-perm",
  "straight-perm": "straight-perm",
  "keratin-treatment": "keratin-treatment",
  "oil-treatment": "oil-treatment",
  "up-do": "updo",
};

/** Build a full Cal.com link for a service, or fall back to the main page. */
export function calLinkForService(serviceId: string): string {
  const slug = SERVICE_CAL_SLUGS[serviceId];
  return slug ? `${CAL_USERNAME}/${slug}` : CAL_USERNAME;
}
