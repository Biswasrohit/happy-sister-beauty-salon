import { MapEmbed } from "@/components/MapEmbed";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Contact & Location | Happy Sister Beauty Salon",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="mb-14 text-center">
        <h1 className="mb-3 font-serif text-4xl tracking-[-0.03em] text-charcoal md:text-5xl">
          Visit Us
        </h1>
        <p className="mx-auto max-w-lg leading-[1.7] text-warm-gray">
          We&apos;re located in the heart of Woodside, Queens. Stop by anytime!
        </p>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <FadeIn>
            <div className="glass-card rounded-2xl p-6">
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
            <div className="glass-card rounded-2xl p-6">
              <h2 className="mb-3 font-serif text-xl text-charcoal">Hours</h2>
              <div className="space-y-2 text-sm">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <div
                    key={day}
                    className="flex justify-between text-warm-gray"
                  >
                    <span className="font-medium text-charcoal">{day}</span>
                    <span>9:00 AM - 7:30 PM</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-6">
              <h2 className="mb-3 font-serif text-xl text-charcoal">Phone</h2>
              <p className="text-warm-gray">(718) 555-0123</p>
              <p className="mt-1 text-xs text-sage">
                Placeholder number for demo
              </p>
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
