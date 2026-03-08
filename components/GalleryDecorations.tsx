"use client";

import { ScissorsIllustration, CombIllustration } from "./DecorativeIllustrations";

export function GalleryDecorations() {
  return (
    <>
      <ScissorsIllustration className="absolute right-[3%] top-[5%] hidden h-24 w-24 text-charcoal/10 lg:block" />
      <CombIllustration className="absolute right-[6%] top-[12%] hidden h-28 w-14 text-charcoal/8 lg:block" />
    </>
  );
}
