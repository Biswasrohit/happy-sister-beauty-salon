"use client";

import { motion } from "framer-motion";
import { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="surface-card group rounded-2xl p-6 transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(232,116,97,0.1)]"
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="font-serif text-xl text-charcoal">{service.name}</h3>
        <span className="whitespace-nowrap rounded-full bg-coral/8 px-3 py-1 font-serif text-lg text-coral">
          {service.priceNote === "Special"
            ? "Special"
            : service.priceMax
              ? `$${service.price} – $${service.priceMax}`
              : `$${service.price}`}
        </span>
      </div>
      <p className="mb-3 text-sm leading-[1.7] text-warm-gray">
        {service.description}
      </p>
      <p className="text-xs text-warm-gray/60">{service.duration} min</p>
    </motion.div>
  );
}
