import { Service } from "./types";

export const services: readonly Service[] = [
  // --- Cuts ---
  {
    id: "mens-haircut",
    name: "Haircut",
    description:
      "We specialize in any type of haircut from short hair to long hair, different textures and thicknesses. Price includes wash, scalp massage, and regular dry.",
    price: 25,
    duration: 30,
    category: "cuts",
  },
  {
    id: "haircut-blowout",
    name: "Haircut & Blowout",
    description:
      "Customized haircut to complement your face shape and enhance your features followed by a blowout/style. Price includes wash and scalp massage.",
    price: 50,
    duration: 45,
    category: "cuts",
  },
  {
    id: "fade",
    name: "Fade",
    description: "Skin fade, mid fade, or taper fade with precision lineup",
    price: 30,
    duration: 30,
    category: "cuts",
  },
  {
    id: "kids-cut",
    name: "Kids Haircut",
    description: "Haircut for children 12 and under",
    price: 18,
    duration: 20,
    category: "cuts",
  },

  // --- Color ---
  {
    id: "balayage",
    name: "Balayage / Ombre",
    description:
      "This service is for darker levels wanting to achieve much lighter blonde results in one session. It can be customized based on your desired color by adding subtle dimension creating a big impact around the face. Consultation recommended.",
    price: 150,
    duration: 120,
    category: "color",
  },
  {
    id: "highlights-full",
    name: "Full Head Highlight / Foiling",
    description:
      "Dimensions that create a big impact around the face through the ends of your hair. Can be customized based on your desired results. Maintenance recommended every 3-4 months.",
    price: 130,
    duration: 120,
    category: "color",
  },
  {
    id: "highlights-partial",
    name: "Partial Highlights",
    description:
      "This foiling service is only in sections, usually placed around the face/top of the hair to give it a brighter, face-framing look.",
    price: 90,
    duration: 90,
    category: "color",
  },
  {
    id: "color-correction",
    name: "Color Correction",
    description:
      "Consultation required before scheduling. Correcting any unwanted color, going from blonde to brunette, brunette to blonde, or correcting unnatural color to lifelike tones.",
    price: 200,
    duration: 180,
    category: "color",
  },
  {
    id: "base-touchup",
    name: "Base Touch Up / Root Touch Up",
    description:
      "Service to cover grey hair, touch up previous color all over, add depth, and refresh moisture.",
    price: 70,
    duration: 60,
    category: "color",
  },
  {
    id: "toner",
    name: "Toner / Gloss Refresh / Glaze",
    description:
      "A service that adds shine and vibrancy to unwanted tones. This service is easily customizable and is a perfect 4-6 week maintenance appointment to maintain highlighting services.",
    price: 50,
    duration: 30,
    category: "color",
  },

  // --- Styling ---
  {
    id: "blowout",
    name: "Blowout & Style",
    description: "Wash, blow dry, and style for any hair type",
    price: 35,
    duration: 45,
    category: "styling",
  },
  {
    id: "beard-trim",
    name: "Beard Trim",
    description: "Shape and trim for a clean, polished look",
    price: 15,
    duration: 20,
    category: "styling",
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard Combo",
    description: "Full haircut with beard trim and lineup",
    price: 40,
    duration: 45,
    category: "styling",
  },
  {
    id: "hot-shave",
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel",
    price: 35,
    duration: 45,
    category: "styling",
  },

  // --- Treatments ---
  {
    id: "facial",
    name: "Facial Treatment",
    description: "Deep cleansing facial for glowing, healthy skin",
    price: 55,
    duration: 60,
    category: "treatments",
  },
  {
    id: "manicure",
    name: "Manicure",
    description: "Nail shaping, cuticle care, and polish",
    price: 25,
    duration: 30,
    category: "treatments",
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description: "Relaxing foot soak, nail care, and polish",
    price: 35,
    duration: 45,
    category: "treatments",
  },
  {
    id: "gel-nails",
    name: "Gel Nails",
    description: "Long-lasting gel polish application",
    price: 40,
    duration: 45,
    category: "treatments",
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Eyebrow, lip, or full face waxing",
    price: 15,
    duration: 15,
    category: "treatments",
  },
];

export const serviceCategories = [
  { id: "cuts" as const, label: "Cuts", displayLabel: "CUTS PRICING" },
  { id: "color" as const, label: "Color", displayLabel: "COLOR PRICING" },
  { id: "styling" as const, label: "Styling", displayLabel: "STYLING PRICING" },
  {
    id: "treatments" as const,
    label: "Hair Treatments / Perm",
    displayLabel: "HAIR TREATMENT/STRAIGHTENING/PERM PRICING",
  },
];
