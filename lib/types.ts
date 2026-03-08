export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // minutes
  category: "barber" | "beauty";
}

export interface BookingData {
  date: string;
  time: string;
  serviceId: string;
  name: string;
  phone: string;
  email: string;
}
