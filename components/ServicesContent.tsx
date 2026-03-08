"use client";

import { ServiceAccordion } from "./ServiceAccordion";
import { FadeIn } from "./FadeIn";
import { services, serviceCategories } from "@/lib/services";

export function ServicesContent() {
  const topRow = serviceCategories.slice(0, 2);
  const bottomRow = serviceCategories.slice(2);

  return (
    <div className="space-y-12">
      {/* Top row: Cuts | Color */}
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        {topRow.map((cat, i) => (
          <FadeIn key={cat.id} delay={i * 0.1}>
            <ServiceAccordion
              categoryLabel={cat.label}
              displayLabel={cat.displayLabel}
              services={services.filter((s) => s.category === cat.id)}
            />
          </FadeIn>
        ))}
      </div>

      {/* Bottom row: Styling | Treatments */}
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        {bottomRow.map((cat, i) => (
          <FadeIn key={cat.id} delay={i * 0.1 + 0.2}>
            <ServiceAccordion
              categoryLabel={cat.label}
              displayLabel={cat.displayLabel}
              services={services.filter((s) => s.category === cat.id)}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
