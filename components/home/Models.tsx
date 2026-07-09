"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const models = [
  {
    name: "GPT-5",
    company: "OpenAI",
    color: "bg-green-500",
    description: "Advanced reasoning, coding and creative writing.",
  },
  {
    name: "Claude",
    company: "Anthropic",
    color: "bg-orange-500",
    description: "Excellent for long documents and deep analysis.",
  },
  {
    name: "Gemini",
    company: "Google",
    color: "bg-blue-500",
    description: "Powerful multimodal AI for text and images.",
  },
  {
    name: "Grok",
    company: "xAI",
    color: "bg-purple-500",
    description: "Real-time intelligence with fast responses.",
  },
];

export default function Models() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        title="Supported AI Models"
        subtitle="Choose the best AI model for every task from one unified workspace."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {models.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 40 }}
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
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                {model.name}
              </h3>

              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${model.color}`} />
                <span className="text-sm text-green-400">
                  Online
                </span>
              </div>
            </div>

            <p className="mt-2 text-blue-400">
              {model.company}
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              {model.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}