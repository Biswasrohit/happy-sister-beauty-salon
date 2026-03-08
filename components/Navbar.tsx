"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book Now" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[-0.02em] text-forest"
        >
          Happy Sister
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium ${
                link.label === "Book Now"
                  ? "rounded-full bg-forest px-5 py-2.5 text-white shadow-[0_2px_12px_rgba(27,67,50,0.25)] transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(27,67,50,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest active:scale-[0.97]"
                  : "text-charcoal-light transition-colors duration-200 hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              }`}
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
            className="block h-0.5 w-6 bg-forest"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block h-0.5 w-6 bg-forest"
          />
          <motion.span
            animate={isOpen ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="block h-0.5 w-6 bg-forest"
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
            className="overflow-hidden border-t border-white/20 md:hidden"
          >
            <div className="px-6 pb-4 pt-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 24 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-sm font-medium text-charcoal-light transition-colors duration-200 hover:text-forest"
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
  );
}
