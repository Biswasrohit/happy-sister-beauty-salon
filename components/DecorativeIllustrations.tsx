"use client";

import { motion } from "framer-motion";

interface IllustrationProps {
  className?: string;
}

export function ScissorsIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      animate={{ y: [-3, 3, -3], rotate: [-1, 1, -1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 85c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-24c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M90 85c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-24c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M42 67L78 25M78 67L42 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </motion.svg>
  );
}

export function CombIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      animate={{ y: [2, -2, 2], rotate: [0, 2, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className={className}
      viewBox="0 0 80 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="20"
        y="10"
        width="40"
        height="140"
        rx="8"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.4"
      />
      <line x1="20" y1="50" x2="8" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <line x1="20" y1="62" x2="8" y2="62" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <line x1="20" y1="74" x2="8" y2="74" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <line x1="20" y1="86" x2="8" y2="86" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <line x1="20" y1="98" x2="8" y2="98" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <line x1="20" y1="110" x2="8" y2="110" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <line x1="20" y1="122" x2="8" y2="122" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <line x1="20" y1="134" x2="8" y2="134" stroke="currentColor" strokeWidth="2" opacity="0.35" />
    </motion.svg>
  );
}

export function HairbrushIllustration({ className = "" }: IllustrationProps) {
  return (
    <motion.svg
      animate={{ y: [-2, 4, -2], rotate: [-2, 0, -2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={className}
      viewBox="0 0 100 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="45"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.4"
      />
      <rect
        x="42"
        y="90"
        width="16"
        height="75"
        rx="8"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.4"
      />
      <circle cx="38" cy="30" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="25" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="62" cy="30" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="35" cy="45" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="40" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="65" cy="45" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="40" cy="58" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="55" cy="55" r="2.5" fill="currentColor" opacity="0.3" />
    </motion.svg>
  );
}
