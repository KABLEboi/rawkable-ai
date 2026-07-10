"use client";

import { motion } from "framer-motion";

export default function ChatCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">

        <div className="flex items-center justify-between">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-400">
            AI Chat
          </span>

          <span className="flex items-center gap-2 text-sm text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>

        </div>

        <h3 className="mt-8 text-3xl font-bold text-white">
          Chat with every leading AI model.
        </h3>

        <p className="mt-4 max-w-md leading-7 text-gray-400">
          Switch between GPT-5, Claude, Gemini and more without
          leaving your workspace.
        </p>

        <div className="mt-10 space-y-4">

          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-sm text-gray-500">
              You
            </p>

            <p className="mt-2 text-white">
              Build me a premium SaaS homepage.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
            <p className="text-sm text-blue-300">
              GPT-5
            </p>

            <p className="mt-2 text-white">
              Creating responsive layout...
            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-blue-500" />
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}