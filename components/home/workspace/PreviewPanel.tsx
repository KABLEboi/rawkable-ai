"use client";

import { motion } from "framer-motion";

export default function PreviewPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
            Live Preview
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Landing Page
          </h3>
        </div>

        <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          Ready
        </span>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#050505]">
        
        {/* Browser Header */}

        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Fake Website */}

        <div className="space-y-6 p-6">

          <div className="h-6 w-32 rounded-full bg-blue-500/30" />

          <div className="h-10 w-3/4 rounded-xl bg-white/10" />

          <div className="h-4 w-full rounded-full bg-white/5" />
          <div className="h-4 w-5/6 rounded-full bg-white/5" />
          <div className="h-4 w-2/3 rounded-full bg-white/5" />

          <div className="grid grid-cols-3 gap-4 pt-6">

            <div className="h-28 rounded-2xl bg-blue-500/20" />

            <div className="h-28 rounded-2xl bg-cyan-500/20" />

            <div className="h-28 rounded-2xl bg-violet-500/20" />

          </div>

        </div>

      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

        <div>
          <p className="text-sm font-medium text-white">
            Generation Progress
          </p>

          <p className="mt-1 text-xs text-gray-500">
            94% Complete
          </p>
        </div>

        <div className="h-2 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[94%] rounded-full bg-blue-500" />
        </div>

      </div>

    </motion.div>
  );
}