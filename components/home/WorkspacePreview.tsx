"use client";

import { motion } from "framer-motion";

import WorkspaceHeader from "./workspace/WorkspaceHeader";
import WorkspaceSidebar from "./workspace/WorkspaceSidebar";
import ChatPanel from "./workspace/ChatPanel";
import ActivityTimeline from "./workspace/ActivityTimeline";
import PreviewPanel from "./workspace/PreviewPanel";

export default function WorkspacePreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto mt-24 w-full max-w-7xl px-6"
    >
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#090909]/80 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

        <WorkspaceHeader />

        <div className="grid min-h-[820px] grid-cols-12">

          {/* Sidebar */}

          <div className="col-span-3">
            <WorkspaceSidebar />
          </div>

          {/* Main */}

          <div className="col-span-9 bg-[#070707] p-8">

            <div className="grid gap-6">

              {/* Chat */}

              <ChatPanel />

              {/* Bottom Grid */}

              <div className="grid gap-6 lg:grid-cols-2">

                <ActivityTimeline />

                <PreviewPanel />

              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}