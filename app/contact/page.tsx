import { MapEmbed } from "@/components/MapEmbed";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Contact & Location | Happy Sister Beauty Salon",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <FadeIn className="mb-14 text-center">
        <h1 className="mb-3 font-serif text-4xl font-light tracking-[-0.02em] text-charcoal md:text-5xl">
          Visit Us
        </h1>
        <p className="mx-auto max-w-lg leading-[1.7] text-warm-gray">
          We&apos;re located in the heart of Woodside, Queens. Stop by anytime!
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <FadeIn>
            <div className="surface-card rounded-2xl p-6">
              <h2 className="mb-3 font-serif text-xl text-charcoal">
                Address
              </h2>
              <p className="leading-[1.7] text-warm-gray">
                39-75 61st St
                <br />
                Woodside, NY 11377
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="surface-card rounded-2xl p-6">
              <h2 className="mb-3 font-serif text-xl text-charcoal">Hours</h2>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 7:30 PM" },
                  { day: "Saturday", hours: "9:00 AM – 7:30 PM" },
                  { day: "Sunday", hours: "10:00 AM – 6:30 PM" },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between text-warm-gray"
                  >
                    <span className="font-medium text-charcoal">{row.day}</span>
                    <span>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="surface-card rounded-2xl p-6">
              <h2 className="mb-3 font-serif text-xl text-charcoal">Phone</h2>
              <a
                href="tel:7184782388"
                className="text-warm-gray transition-colors duration-200 hover:text-coral"
              >
                (718) 478-2388
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <MapEmbed />
        </FadeIn>
      </div>
    </div>
  );
}
