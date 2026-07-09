"use client";
import HeroButtons from "./HeroButtons";
import { motion } from "framer-motion";
import WorkspacePreview from "./WorkspacePreview";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-xl"
        >
          Now supporting GPT-5 • Claude • Gemini
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          One Workspace.
          <br />
          <span className="bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
            Infinite Intelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl"
        >
          Chat, create, code and automate with the world's leading AI
          models—all inside one beautiful workspace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-500">
            Start Building Free
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition duration-300 hover:border-white/30 hover:bg-white/10">
            Watch Demo
          </button>
        </motion.div>
 <WorkspacePreview />
      </div>
    </section>
  );
}