"use client";

import { motion } from "framer-motion";

export default function ImageCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">

        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-violet-300">
          Image Studio
        </span>

        <h3 className="mt-8 text-2xl font-bold text-white">
          Generate stunning visuals.
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          Create photorealistic images, illustrations and concept art
          from a single prompt.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-5">

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">
              Rendering...
            </span>

            <span className="text-sm text-violet-300">
              94%
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: "15%" }}
              animate={{ width: "94%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">

            <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/20" />

            <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/30" />

            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/30" />

            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/30" />

          </div>

        </div>

      </div>
    </motion.div>
  );
}