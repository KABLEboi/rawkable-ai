"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "1M+",
    label: "AI Requests",
  },
  {
    number: "99.99%",
    label: "Uptime",
  },
  {
    number: "50+",
    label: "AI Models",
  },
  {
    number: "150K+",
    label: "Creators",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
          >
            <h3 className="text-5xl font-extrabold text-blue-500">
              {stat.number}
            </h3>

            <p className="mt-4 text-gray-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}