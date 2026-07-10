"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Blue Orb */}

     <motion.div
  className="absolute left-20 top-20 h-40 w-40 rounded-full bg-red-500"
  animate={{
    x: [0, 200, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
/>

      {/* Purple Orb */}

      <motion.div
        className="absolute right-[-140px] bottom-[-100px] h-[560px] w-[560px] rounded-full bg-violet-500/20 blur-[160px]"
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Cyan Orb */}

      <motion.div
        className="absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_65%)]" />

    </div>
  );
}