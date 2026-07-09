"use client";

import { motion } from "framer-motion";

export default function WorkspaceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between border-b border-white/10 bg-[#0b0b0b]/90 px-6 py-4 backdrop-blur-xl"
    >
      {/* Left */}

      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="ml-3 h-6 w-px bg-white/10" />

        <div>
          <h3 className="text-sm font-semibold text-white">
            RAWKABLE AI Workspace
          </h3>

          <p className="text-xs text-gray-500">
            Premium AI Operating System
          </p>
        </div>
      </div>

      {/* Center */}

      <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 md:flex">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

        <span className="text-sm text-gray-300">
          GPT-5 Active
        </span>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10">
          Share
        </button>

        <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold transition hover:bg-blue-500">
          Upgrade
        </button>

      </div>
    </motion.div>
  );
}