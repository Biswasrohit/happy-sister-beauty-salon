"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/1-balayage.png",
    alt: "Balayage styling",
    span: "row-span-2",
    rotate: "-rotate-1",
  },
  {
    id: 2,
    src: "/gallery/2-highlights.png",
    alt: "Highlight coloring",
    span: "",
    rotate: "rotate-1",
  },
  {
    id: 3,
    src: "/gallery/3-waves.png",
    alt: "Wavy styling",
    span: "",
    rotate: "-rotate-[0.5deg]",
  },
  {
    id: 4,
    src: "/gallery/4-updo.png",
    alt: "Updo styling",
    span: "",
    rotate: "rotate-[0.5deg]",
  },
  {
    id: 5,
    src: "/gallery/5-color.png",
    alt: "Hair color transformation",
    span: "row-span-2",
    rotate: "rotate-1",
  },
  {
    id: 6,
    src: "/gallery/6-blowout.png",
    alt: "Professional blowout",
    span: "",
    rotate: "-rotate-1",
  },
  {
    id: 7,
    src: "/gallery/7-trim.png",
    alt: "Precision trim",
    span: "",
    rotate: "rotate-[0.5deg]",
  },
  {
    id: 8,
    src: "/gallery/8-ombre.png",
    alt: "Ombre treatment",
    span: "",
    rotate: "-rotate-[0.5deg]",
  },
  {
    id: 9,
    src: "/gallery/9-style.png",
    alt: "Salon styling",
    span: "",
    rotate: "rotate-1",
  },
];

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-3 md:gap-4">
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={() => setLightboxIndex(i)}
            className={`group overflow-hidden rounded-xl ${img.span} ${img.rotate} transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(232,116,97,0.15)]`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </motion.button>
        ))}
      </div>

      {/* Featured large image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative mt-6 h-75 overflow-hidden rounded-xl md:h-100"
      >
        <Image
          src="/placeholder/hero.png"
          alt="Happy Sister Beauty Salon interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 to-transparent" />
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(26, 26, 26, 0.9)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute right-4 top-4 text-3xl text-cream/80 transition-colors duration-200 hover:text-cream focus-visible:outline-2 focus-visible:outline-cream"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              &times;
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-cream/80 transition-colors duration-200 hover:text-cream focus-visible:outline-2 focus-visible:outline-cream"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex === 0
                    ? galleryImages.length - 1
                    : lightboxIndex - 1
                );
              }}
              aria-label="Previous image"
            >
              &lsaquo;
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="aspect-square w-full max-w-lg overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="h-full w-full object-cover"
              />
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-cream/80 transition-colors duration-200 hover:text-cream focus-visible:outline-2 focus-visible:outline-cream"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex === galleryImages.length - 1
                    ? 0
                    : lightboxIndex + 1
                );
              }}
              aria-label="Next image"
            >
              &rsaquo;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
