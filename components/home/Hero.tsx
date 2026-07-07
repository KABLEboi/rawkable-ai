"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">
          <span className="text-sm font-medium text-blue-400">
            🚀 AI Workspace for Creators • Developers • Businesses
          </span>
        </div>
      </motion.div>

      <motion.h1
        className="max-w-5xl text-6xl font-extrabold leading-tight md:text-7xl"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        The Future of
        <span className="text-blue-500"> Artificial Intelligence</span>
        <br />
        Starts Here.
      </motion.h1>

      <motion.p
        className="mt-8 max-w-2xl text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Chat with powerful AI models, generate images, automate tasks,
        and build faster inside one beautiful workspace.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button>Start Building Free →</Button>
      </motion.div>

    </section>
  );
}