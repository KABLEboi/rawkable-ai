"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-10 flex flex-wrap items-center justify-center gap-5"
    >
      <button className="group flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-105 hover:bg-blue-500">
        Start Building Free

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10">
        Watch Demo
      </button>
    </motion.div>
  );
}