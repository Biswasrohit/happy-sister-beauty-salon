import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/FadeIn";
import { services } from "@/lib/services";

const featured = services.filter((s) =>
  [
    "mens-haircut",
    "womens-cut",
    "fade",
    "color",
    "manicure",
    "facial",
  ].includes(s.id)
);

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn className="mb-14 text-center">
          <h2 className="mb-3 font-serif text-4xl tracking-[-0.03em] text-charcoal md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-lg leading-[1.7] text-warm-gray">
            From clean fades to full color transformations, we&apos;ve got you
            covered. Barber and beauty, all under one roof.
          </p>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full border-2 border-forest px-8 py-3 font-semibold text-forest transition-colors duration-200 hover:bg-forest hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest active:scale-[0.97]"
          >
            View All Services & Pricing
          </Link>
        </FadeIn>
      </section>

      {/* Why us — glassmorphism feature cards on green bg */}
      <section className="grain relative overflow-hidden bg-gradient-to-br from-forest via-forest-light to-sage/70 py-24">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 70% 30%, rgba(149,213,178,0.4), transparent)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeIn className="mb-14 text-center">
            <h2 className="mb-3 font-serif text-4xl tracking-[-0.03em] text-cream md:text-5xl">
              Why Choose Happy Sister?
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Family Atmosphere",
                desc: "We treat every customer like family. Walk in a stranger, leave as a friend.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Expert Stylists",
                desc: "Our team brings years of experience in both barbering and beauty services.",
                icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
              {
                title: "Walk-ins Welcome",
                desc: "No appointment? No problem. We always have room for you.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                    <svg
                      className="h-7 w-7 text-sage-light"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-serif text-xl text-cream">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-mint/80">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(216,243,220,0.5), transparent)",
          }}
        />
        <FadeIn className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl tracking-[-0.03em] text-charcoal md:text-5xl">
            Ready for a Fresh Look?
          </h2>
          <p className="mb-8 text-lg leading-[1.7] text-warm-gray">
            Book your appointment today and let us take care of the rest.
          </p>
          <Link
            href="/book"
            className="inline-block rounded-full bg-forest px-8 py-4 text-lg font-semibold text-white shadow-[0_4px_24px_rgba(27,67,50,0.25)] transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(27,67,50,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest active:scale-[0.97]"
          >
            Book Now
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
