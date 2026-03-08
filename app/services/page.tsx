import { FadeIn } from "@/components/FadeIn";
import { ServicesContent } from "@/components/ServicesContent";

export const metadata = {
  title: "Services & Pricing | Happy Sister Beauty Salon",
};

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/placeholder/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        <FadeIn className="mb-14 text-center">
          <h1 className="mb-3 font-serif text-4xl font-light tracking-[-0.02em] text-charcoal md:text-5xl lg:text-6xl">
            Services &amp; Pricing
          </h1>
          <p className="mx-auto max-w-lg leading-[1.7] text-warm-gray">
            Quality grooming and beauty services at neighborhood-friendly prices.
          </p>
        </FadeIn>

        <ServicesContent />

        <FadeIn delay={0.3}>
          <p className="mt-12 text-center text-xs italic leading-relaxed text-warm-gray">
            * Prices for certain services may vary depending on the length, texture,
            and desired results. Please consult and ask your stylist for an accurate
            quote prior to your service.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
