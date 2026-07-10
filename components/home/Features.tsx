"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

import ChatCard from "./features/ChatCard";
import ImageCard from "./features/ImageCard";
import AutomationCard from "./features/AutomationCard";
import AgentsCard from "./features/AgentsCard";

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <SectionTitle
        title="One Platform. Endless Possibilities."
        subtitle="Everything you need to chat, create, automate and collaborate with AI in one premium workspace."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 grid gap-6 lg:grid-cols-12 auto-rows-[320px]"
      >

        {/* Large Left */}

        <div className="lg:col-span-7 lg:row-span-2">
          <ChatCard />
        </div>

        {/* Small Top Right */}

        <div className="lg:col-span-5">
          <ImageCard />
        </div>

        {/* Bottom Left */}

        <div className="lg:col-span-5">
          <AutomationCard />
        </div>

        {/* Large Bottom Right */}

        <div className="lg:col-span-7">
          <AgentsCard />
        </div>

      </motion.div>

    </section>
  );
}