"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { calLinkForService, SERVICE_CAL_SLUGS } from "@/lib/cal-config";
import { BookNowButton } from "./BookNowButton";

interface ServiceAccordionProps {
  readonly categoryLabel: string;
  readonly displayLabel: string;
  readonly services: readonly Service[];
}

export function ServiceAccordion({
  categoryLabel,
  displayLabel,
  services,
}: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3 className="mb-4 font-serif text-3xl font-light tracking-[-0.02em] text-charcoal md:text-4xl">
        {categoryLabel}
      </h3>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 flex w-full items-center gap-2 border-2 border-coral bg-coral/8 px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-coral transition-colors duration-200 hover:bg-coral/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="text-base leading-none"
        >
          +
        </motion.span>
        {displayLabel}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="overflow-hidden"
          >
            <div className="space-y-0 py-2">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.04,
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                  }}
                  className="border-b border-cream-dark/40 py-4 last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-lg font-medium text-charcoal">
                      {service.name}
                    </h4>
                    <span className="shrink-0 font-serif text-lg text-charcoal-light">
                      {service.priceNote === "Special"
                        ? "Special"
                        : service.priceMax
                          ? `$${service.price} – $${service.priceMax}`
                          : `$${service.price}`}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-warm-gray/60">
                    ~{service.duration} min
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <p className="flex-1 text-sm leading-[1.7] text-warm-gray">
                      {service.description}
                    </p>
                    {SERVICE_CAL_SLUGS[service.id] ? (
                      <BookNowButton
                        calLink={calLinkForService(service.id)}
                        className="shrink-0 border border-coral px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-coral transition-colors duration-200 hover:bg-coral hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral active:scale-[0.97]"
                      >
                        Book
                      </BookNowButton>
                    ) : (
                      <Link
                        href="/book"
                        className="shrink-0 border border-coral px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-coral transition-colors duration-200 hover:bg-coral hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral active:scale-[0.97]"
                      >
                        Book
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
