"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ScissorsIllustration,
  CombIllustration,
  HairbrushIllustration,
} from "./DecorativeIllustrations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const accentWords = [
  { text: "soften", top: "8%", left: "8%", rotate: -8, delay: 0.3 },
  { text: "beautify", top: "5%", right: "12%", rotate: 6, delay: 0.5 },
  { text: "shinier", top: "38%", left: "3%", rotate: -4, delay: 0.7 },
  { text: "hydrated", top: "32%", right: "5%", rotate: 5, delay: 0.9 },
];

export function Hero() {
  return (
    <>
      {/* Section A: Artistic Welcome with decorative illustrations */}
      <section className="grain relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
        {/* Soft radial gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(248,216,206,0.35), transparent), radial-gradient(ellipse 50% 40% at 10% 70%, rgba(248,216,206,0.2), transparent)",
          }}
        />

        {/* Decorative illustrations */}
        <ScissorsIllustration className="absolute left-[5%] top-[10%] hidden h-28 w-28 text-charcoal/20 md:block" />
        <CombIllustration className="absolute right-[8%] top-[15%] hidden h-32 w-16 text-charcoal/15 md:block" />
        <HairbrushIllustration className="absolute bottom-[10%] left-[12%] hidden h-28 w-16 text-charcoal/12 md:block" />

        {/* Script accent words */}
        {accentWords.map((word) => (
          <motion.span
            key={word.text}
            custom={word.delay}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="absolute hidden font-script text-3xl text-charcoal/20 md:block lg:text-4xl"
            style={{
              top: word.top,
              left: word.left,
              right: word.right,
              transform: `rotate(${word.rotate}deg)`,
            }}
          >
            {word.text}
          </motion.span>
        ))}

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            {/* Left: salon photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl md:w-1/2"
            >
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/placeholder/hero.png"
                  alt="Happy Sister Beauty Salon interior"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>

            {/* Right: brand intro */}
            <div className="w-full text-center md:w-1/2 md:text-left">
              <motion.p
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-2 font-script text-4xl text-coral md:text-5xl"
              >
                Experience
              </motion.p>
              <motion.h1
                custom={0.35}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-4 font-serif text-4xl font-light tracking-[-0.02em] text-charcoal md:text-5xl lg:text-6xl"
              >
                Happy Sister
                <br />
                Beauty Salon
              </motion.h1>
              <motion.p
                custom={0.5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-base leading-[1.8] text-warm-gray"
              >
                Your neighborhood barbershop &amp; beauty salon in the heart of
                Woodside, Queens. Where everyone leaves feeling like family.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Welcome text block */}
      <section className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl px-6 text-center"
        >
          <p className="mb-3 font-script text-3xl text-coral">Welcome to</p>
          <h2 className="mb-6 font-serif text-3xl font-light tracking-[-0.02em] text-charcoal md:text-4xl">
            A Premier Salon in Woodside, Queens
          </h2>
          <p className="mb-5 leading-[1.8] text-warm-gray">
            We are a team of stylists who are passionate about what we do. We want
            to make you feel at home. We focus on providing our guests the utmost of
            relaxation and looking great. It is our goal that every single client
            leaves our salon feeling relaxed and beautiful.
          </p>
          <p className="leading-[1.8] text-warm-gray">
            We accommodate clients in a warm and encouraging creative environment.
            We are proud to have a supportive group of talented, creative stylists
            that uphold high standards and respect your vision.
          </p>
        </motion.div>
      </section>

      {/* Section C: Dark photo hero with CTA */}
      <section className="grain relative overflow-hidden">
        <div className="relative h-[50vh] min-h-[400px] w-full md:h-[60vh]">
          <Image
            src="/placeholder/hero.png"
            alt="Inside Happy Sister Beauty Salon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/40 to-charcoal/20" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 font-serif text-3xl font-light tracking-[-0.02em] text-white md:text-5xl lg:text-6xl"
            >
              The Complete Hair Studio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 font-script text-xl text-white/80 md:text-2xl"
            >
              Cutting, styling, and coloring for all hair types
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/services"
                className="inline-block border-2 border-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97]"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section D: Our Salon */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full text-center md:w-1/2 md:text-left"
            >
              <h2 className="mb-2 font-serif text-3xl font-light tracking-[-0.02em] text-charcoal md:text-4xl">
                Our Salon
              </h2>
              <p className="mb-6 font-script text-2xl text-coral">
                Take a peek at what we do
              </p>
              <p className="mb-6 leading-[1.8] text-warm-gray">
                Located at 39-75 61st Street in the heart of Woodside, Queens, we
                welcome walk-ins and appointments alike. Come see our bright,
                modern space and meet the team.
              </p>
              <p className="text-sm text-warm-gray">
                Follow Us{" "}
                <a
                  href="#"
                  className="font-semibold text-coral transition-colors duration-200 hover:text-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                >
                  @happysistersalon
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl md:w-1/2"
            >
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/placeholder/front_entrance.png"
                  alt="Happy Sister Beauty Salon storefront"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
