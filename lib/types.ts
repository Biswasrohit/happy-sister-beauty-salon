export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // minutes
  category: "cuts" | "color" | "styling" | "treatments";
}

export interface BookingData {
  date: string;
  time: string;
  serviceId: string;
  name: string;
  phone: string;
  email: string;
}
