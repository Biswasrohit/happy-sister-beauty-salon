"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TopInfoBar } from "./TopInfoBar";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TopInfoBar />
      <nav className="sticky top-0 z-50 border-b border-cream-dark/40 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/placeholder/Logo.png"
              alt="Happy Sister Beauty Salon"
              width={180}
              height={48}
              priority
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal-light transition-colors duration-200 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="block h-0.5 w-6 bg-charcoal"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-0.5 w-6 bg-charcoal"
            />
            <motion.span
              animate={isOpen ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="block h-0.5 w-6 bg-charcoal"
            />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="overflow-hidden border-t border-cream-dark/40 md:hidden"
            >
              <div className="px-6 pb-4 pt-2">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-sm font-medium uppercase tracking-[0.12em] text-charcoal-light transition-colors duration-200 hover:text-coral"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
