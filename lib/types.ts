export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  priceMax?: number; // for range pricing (e.g., Short $25 / Long $40)
  priceNote?: string; // e.g., "Short / Long", "Special"
  duration: number; // minutes
  category: "cuts" | "color" | "treatments" | "styling";
}

export interface BookingData {
  date: string;
  time: string;
  serviceId: string;
  name: string;
  phone: string;
  email: string;
}
