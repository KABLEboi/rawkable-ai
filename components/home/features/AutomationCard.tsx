"use client";

import { motion } from "framer-motion";

const workflow = [
  {
    title: "New Customer",
    status: "Detected",
  },
  {
    title: "Generate Email",
    status: "Running",
  },
  {
    title: "Schedule Meeting",
    status: "Queued",
  },
  {
    title: "CRM Updated",
    status: "Done",
  },
];

export default function AutomationCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">

        <div className="flex items-center justify-between">

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-400">
            Automation
          </span>

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
            Active
          </span>

        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">
          Let AI run the boring work.
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          Build intelligent workflows that react automatically,
          saving hours every day.
        </p>

        <div className="mt-8 space-y-4">

          {workflow.map((step, index) => (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
            >

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-emerald-400" />

                <span className="text-white">
                  {step.title}
                </span>

              </div>

              <span className="text-sm text-gray-400">
                {step.status}
              </span>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.div>
  );
}