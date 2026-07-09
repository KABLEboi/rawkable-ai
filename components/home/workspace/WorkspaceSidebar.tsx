"use client";

import { motion } from "framer-motion";

const models = [
  { name: "GPT-5", active: true },
  { name: "Claude 4", active: false },
  { name: "Gemini 2.5", active: false },
  { name: "Grok", active: false },
];

const recentChats = [
  "Premium Landing Page",
  "Marketing Strategy",
  "React Dashboard",
  "AI Automation",
];

export default function WorkspaceSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex h-full flex-col border-r border-white/10 bg-[#0b0b0b]/80 p-6"
    >
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
          AI Models
        </p>

        <div className="space-y-3">
          {models.map((model) => (
            <button
              key={model.name}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 transition ${
                model.active
                  ? "bg-blue-600 text-white"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              <span>{model.name}</span>

              {model.active && (
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
          Recent Chats
        </p>

        <div className="space-y-2">
          {recentChats.map((chat) => (
            <button
              key={chat}
              className="w-full rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              {chat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto rounded-3xl border border-blue-500/20 bg-blue-500/10 p-5">
        <p className="text-sm font-semibold text-white">
          RAWKABLE PRO
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Unlock every AI model, unlimited generations and premium workflows.
        </p>

        <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-medium transition hover:bg-blue-500">
          Upgrade
        </button>
      </div>
    </motion.aside>
  );
}