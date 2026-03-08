import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/FadeIn";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services & Pricing | Happy Sister Beauty Salon",
};

const barberServices = services.filter((s) => s.category === "barber");
const beautyServices = services.filter((s) => s.category === "beauty");

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="mb-14 text-center">
        <h1 className="mb-3 font-serif text-4xl tracking-[-0.03em] text-charcoal md:text-5xl">
          Services & Pricing
        </h1>
        <p className="mx-auto max-w-lg leading-[1.7] text-warm-gray">
          Quality grooming and beauty services at neighborhood-friendly prices.
        </p>
      </FadeIn>

      <FadeIn className="mb-12">
        <h2 className="mb-6 font-serif text-2xl text-forest">
          Barber Services
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {barberServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mb-12">
        <h2 className="mb-6 font-serif text-2xl text-forest">
          Beauty Services
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beautyServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </FadeIn>

      <FadeIn className="text-center">
        <Link
          href="/book"
          className="inline-block rounded-full bg-forest px-8 py-4 text-lg font-semibold text-white shadow-[0_4px_24px_rgba(27,67,50,0.25)] transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(27,67,50,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest active:scale-[0.97]"
        >
          Book an Appointment
        </Link>
      </FadeIn>
    </div>
  );
}
