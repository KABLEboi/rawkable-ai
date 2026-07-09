"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Prompt Received",
    time: "09:41",
    color: "bg-blue-500",
  },
  {
    title: "Analyzing Request",
    time: "09:41",
    color: "bg-cyan-400",
  },
  {
    title: "Selecting GPT-5",
    time: "09:42",
    color: "bg-violet-500",
  },
  {
    title: "Generating Components",
    time: "09:42",
    color: "bg-amber-400",
  },
  {
    title: "Workspace Ready",
    time: "09:43",
    color: "bg-emerald-400",
  },
];

export default function ActivityTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
    >
      <h3 className="text-lg font-semibold text-white">
        Live Activity
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Follow every step of the AI workflow.
      </p>

      <div className="mt-8 space-y-6">
        {activities.map((item, index) => (
          <div
            key={item.title}
            className="relative flex items-start gap-4"
          >
            <div className="flex flex-col items-center">
              <div
                className={`h-3 w-3 rounded-full ${item.color}`}
              />

              {index !== activities.length - 1 && (
                <div className="mt-2 h-10 w-px bg-white/10" />
              )}
            </div>

            <div className="-mt-1">
              <p className="text-sm font-medium text-white">
                {item.title}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
          Status
        </p>

        <p className="mt-2 text-sm text-gray-300">
          Your workspace is generating assets in real time.
        </p>
      </div>
    </motion.div>
  );
}