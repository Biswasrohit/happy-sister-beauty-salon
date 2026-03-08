"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="grain relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-light to-sage/60" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(149,213,178,0.4), transparent), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(45,106,79,0.5), transparent)",
        }}
      />

      {/* Floating glass orbs */}
      <motion.div
        animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[20%] h-64 w-64 rounded-full bg-sage-light/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[10%] h-80 w-80 rounded-full bg-mint/8 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-sage-light"
        >
          Woodside, Queens
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-serif text-5xl leading-[1.1] tracking-[-0.03em] text-cream md:text-7xl lg:text-8xl"
        >
          Happy Sister
          <br />
          <span className="italic text-sage-light">Beauty Salon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-xl text-lg leading-[1.7] text-mint/80"
        >
          Your neighborhood barbershop &amp; beauty salon where everyone leaves
          feeling like family. Haircuts, styling, coloring, nails, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/book"
            className="rounded-full bg-cream px-8 py-4 text-lg font-semibold text-forest shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream active:scale-[0.97]"
          >
            Book an Appointment
          </Link>
          <Link
            href="/services"
            className="glass rounded-full px-8 py-4 text-lg font-semibold text-cream transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream active:scale-[0.97]"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
