import { Service } from "./types";

export const services: readonly Service[] = [
  // --- Cuts ---
  {
    id: "haircut",
    name: "Hair Cut",
    description:
      "Haircut tailored to your style. Price varies according to style.",
    price: 15,
    priceMax: 20,
    duration: 30,
    category: "cuts",
  },
  {
    id: "wash-blowdry",
    name: "Wash + Blowdry",
    description:
      "Shampoo wash and professional blow dry. Price varies according to style.",
    price: 15,
    priceMax: 30,
    duration: 30,
    category: "cuts",
  },

  // --- Color ---
  {
    id: "color-root",
    name: "Color: Hair Root",
    description: "Root touch-up color service to cover regrowth.",
    price: 40,
    duration: 45,
    category: "color",
  },
  {
    id: "color-whole",
    name: "Color: Whole Hair",
    description:
      "Full hair color service. Price varies according to style.",
    price: 60,
    priceMax: 90,
    duration: 60,
    category: "color",
  },
  {
    id: "highlight",
    name: "Highlight",
    description:
      "Highlight service for added dimension and brightness. Price varies according to style.",
    price: 50,
    priceMax: 100,
    duration: 90,
    category: "color",
  },

  // --- Treatments ---
  {
    id: "curly-perm",
    name: "Curly Perm",
    description:
      "Professional perm for lasting curls and volume. Price varies according to style.",
    price: 60,
    priceMax: 100,
    duration: 90,
    category: "treatments",
  },
  {
    id: "straight-perm",
    name: "Straight Perm",
    description:
      "Chemical straightening treatment for smooth, straight hair. Price varies according to style.",
    price: 160,
    priceMax: 180,
    duration: 150,
    category: "treatments",
  },
  {
    id: "keratin-treatment",
    name: "Keratin Treatment",
    description:
      "Smoothing keratin treatment to reduce frizz and add shine. Price varies according to style.",
    price: 160,
    priceMax: 200,
    duration: 120,
    category: "treatments",
  },
  {
    id: "oil-treatment",
    name: "Oil Treatment",
    description:
      "Deep conditioning oil treatment to restore moisture and shine. Price varies according to style.",
    price: 30,
    priceMax: 50,
    duration: 45,
    category: "treatments",
  },

  // --- Styling ---
  {
    id: "up-do",
    name: "Updo",
    description:
      "Elegant updo styling for special events, weddings, and occasions. Price varies according to style.",
    price: 30,
    priceMax: 40,
    duration: 45,
    category: "styling",
  },
];

export const serviceCategories = [
  { id: "cuts" as const, label: "Cuts", displayLabel: "CUTS & WASH PRICING" },
  { id: "color" as const, label: "Color", displayLabel: "COLOR PRICING" },
  {
    id: "treatments" as const,
    label: "Treatments & Perm",
    displayLabel: "TREATMENT / PERM PRICING",
  },
  {
    id: "styling" as const,
    label: "Styling",
    displayLabel: "STYLING PRICING",
  },
];
