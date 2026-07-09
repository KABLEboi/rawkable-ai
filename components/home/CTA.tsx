"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-12 md:p-16 backdrop-blur-xl"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

        {/* Floating Glow */}
        <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 Start Building Today
          </span>

          <h2 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Ready to Build the Future
            <span className="text-blue-500"> with AI?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Chat with powerful AI models, generate images, automate your
            workflow and build faster than ever—all from one beautiful
            workspace.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-500">
              Start Building Free →
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black">
              View Pricing
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}