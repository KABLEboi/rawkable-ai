"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "💬",
    title: "AI Chat",
    description:
      "Talk with the world's smartest AI models inside one beautiful workspace.",
  },
  {
    icon: "🎨",
    title: "Image Generation",
    description:
      "Create stunning AI images in seconds with next-generation models.",
  },
  {
    icon: "⚡",
    title: "Automation",
    description:
      "Automate repetitive work and focus on what matters most.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <SectionTitle
        title="Everything You Need"
        subtitle="Powerful AI tools designed for creators, developers and businesses."
      />

      <div className="grid gap-8 md:grid-cols-3">

        {features.map((feature, index) => (

          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
          >

            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

            <div className="relative">

              <div className="text-6xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                {feature.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}