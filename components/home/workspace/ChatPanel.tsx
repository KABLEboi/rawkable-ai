"use client";

import { motion } from "framer-motion";

export default function ChatPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03]"
    >
      {/* Chat Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
            GPT-5
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Design a Premium AI Landing Page
          </h2>
        </div>

        <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          Thinking...
        </span>
      </div>

      {/* Conversation */}

      <div className="flex-1 space-y-6 p-6">

        {/* User */}

        <div className="flex justify-end">
          <div className="max-w-lg rounded-3xl bg-blue-600 px-6 py-4">
            <p className="text-sm leading-7 text-white">
              Create a futuristic AI landing page with smooth
              animations, premium typography and an interface
              that feels like the future.
            </p>
          </div>
        </div>

        {/* AI */}

        <div className="flex justify-start">
          <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 px-6 py-5">
            <p className="text-sm leading-8 text-gray-300">
              Understood.
              <br />
              I'm creating a modern SaaS experience with:
            </p>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>✓ Premium Hero Section</li>
              <li>✓ Interactive Workspace</li>
              <li>✓ AI Product Showcase</li>
              <li>✓ Beautiful Motion Design</li>
              <li>✓ Responsive Layout</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Prompt */}

      <div className="border-t border-white/10 p-5">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">

          <input
            readOnly
            value="Refine this design and make it feel more premium..."
            className="w-full bg-transparent text-gray-400 outline-none"
          />

          <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-500">
            Send
          </button>

        </div>
      </div>
    </motion.div>
  );
}