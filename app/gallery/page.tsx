import { GalleryGrid } from "@/components/GalleryGrid";
import { FadeIn } from "@/components/FadeIn";
import { GalleryDecorations } from "@/components/GalleryDecorations";

export const metadata = {
  title: "Gallery | Happy Sister Beauty Salon",
};

export default function GalleryPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Vertical rotated "Quality" text on left */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 z-10 hidden select-none font-serif text-[120px] font-light leading-none tracking-[-0.03em] text-coral/15 lg:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Quality
      </div>

      <GalleryDecorations />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 lg:pl-24">
        <FadeIn className="mb-14">
          <h1 className="mb-2 font-serif text-4xl font-light tracking-[-0.02em] text-coral md:text-5xl lg:text-6xl">
            Happy Sister Gallery
          </h1>
          <p className="font-script text-2xl text-charcoal-light md:text-3xl">
            Excellence is part of our name
          </p>
        </FadeIn>

        <GalleryGrid />
      </div>
    </div>
  );
}
