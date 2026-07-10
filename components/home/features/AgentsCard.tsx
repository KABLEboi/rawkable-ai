"use client";

import { motion } from "framer-motion";

const agents = [
  {
    name: "Research",
    status: "Searching",
    color: "bg-blue-500",
  },
  {
    name: "Writer",
    status: "Writing",
    color: "bg-violet-500",
  },
  {
    name: "Designer",
    status: "Creating",
    color: "bg-cyan-500",
  },
  {
    name: "Developer",
    status: "Building",
    color: "bg-emerald-500",
  },
];

export default function AgentsCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">

        <div className="flex items-center justify-between">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-400">
            AI Agents
          </span>

          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
            4 Active
          </span>

        </div>

        <h3 className="mt-8 text-3xl font-bold text-white">
          Multiple AI agents working together.
        </h3>

        <p className="mt-4 max-w-md leading-7 text-gray-400">
          Assign specialized AI agents to collaborate on complex projects simultaneously.
        </p>

        <div className="mt-10 space-y-4">

          {agents.map((agent) => (

            <div
              key={agent.name}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
            >

              <div className="flex items-center gap-4">

                <div className={`h-3 w-3 rounded-full ${agent.color} animate-pulse`} />

                <span className="font-medium text-white">
                  {agent.name}
                </span>

              </div>

              <span className="text-sm text-gray-400">
                {agent.status}
              </span>

            </div>

          ))}

        </div>

      </div>
    </motion.div>
  );
}