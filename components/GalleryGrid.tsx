"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholderImages = [
  { id: 1, alt: "Salon interior", color: "from-sage/20 to-mint/40" },
  { id: 2, alt: "Barber station", color: "from-forest/15 to-sage/20" },
  { id: 3, alt: "Hair styling", color: "from-sage-light/30 to-mint-light" },
  { id: 4, alt: "Nail art", color: "from-forest-light/15 to-sage/25" },
  { id: 5, alt: "Beard trim", color: "from-forest/20 to-sage-light/20" },
  { id: 6, alt: "Hair coloring", color: "from-sage/30 to-mint/30" },
  { id: 7, alt: "Facial treatment", color: "from-sage-light/25 to-mint-light" },
  { id: 8, alt: "Salon team", color: "from-forest/10 to-sage/20" },
  { id: 9, alt: "Happy customer", color: "from-mint/40 to-sage-light/20" },
];

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {placeholderImages.map((img, i) => (
          <motion.button
            key={img.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            onClick={() => setLightboxIndex(i)}
            className="glass-card group relative aspect-square overflow-hidden rounded-2xl"
          >
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${img.color}`}
            >
              <div className="text-center">
                <svg
                  className="mx-auto mb-2 h-8 w-8 text-sage"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs text-sage">{img.alt}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(27, 67, 50, 0.85)", backdropFilter: "blur(12px)" }}
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
                    ? placeholderImages.length - 1
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
              className={`glass-card aspect-square w-full max-w-lg rounded-2xl bg-gradient-to-br ${placeholderImages[lightboxIndex].color} flex items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <svg
                  className="mx-auto mb-3 h-16 w-16 text-sage"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-sage">
                  {placeholderImages[lightboxIndex].alt}
                </span>
              </div>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-cream/80 transition-colors duration-200 hover:text-cream focus-visible:outline-2 focus-visible:outline-cream"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex === placeholderImages.length - 1
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
