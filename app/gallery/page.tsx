import { GalleryGrid } from "@/components/GalleryGrid";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Gallery | Happy Sister Beauty Salon",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn className="mb-14 text-center">
        <h1 className="mb-3 font-serif text-4xl tracking-[-0.03em] text-charcoal md:text-5xl">
          Our Gallery
        </h1>
        <p className="mx-auto max-w-lg leading-[1.7] text-warm-gray">
          Take a look at our work and the warm, welcoming space we&apos;ve
          created for our community.
        </p>
      </FadeIn>

      <GalleryGrid />

      <FadeIn className="mt-8 text-center">
        <p className="text-sm text-warm-gray">
          Real photos coming soon! Follow us on Instagram for the latest looks.
        </p>
      </FadeIn>
    </div>
  );
}
