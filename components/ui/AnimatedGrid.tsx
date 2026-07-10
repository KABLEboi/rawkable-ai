"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 0.18,
        backgroundPosition: ["0px 0px", "0px 60px"],
      }}
      transition={{
        opacity: {
          duration: 2,
        },
        backgroundPosition: {
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}