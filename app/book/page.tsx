import { BookingForm } from "@/components/BookingForm";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Book an Appointment | Happy Sister Beauty Salon",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <FadeIn className="mb-10 text-center">
        <h1 className="mb-3 font-serif text-4xl tracking-[-0.03em] text-charcoal md:text-5xl">
          Book an Appointment
        </h1>
        <p className="leading-[1.7] text-warm-gray">
          Choose your date, time, and service. Walk-ins are also always welcome!
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <BookingForm />
      </FadeIn>
    </div>
  );
}
