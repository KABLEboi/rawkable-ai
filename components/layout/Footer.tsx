"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-blue-500">RAWKABLE</span> AI
            </h2>

            <p className="mt-4 text-gray-400">
              The all-in-one AI workspace for creators, developers,
              entrepreneurs and businesses.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Product</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Features</a></li>
              <li><a href="#">Models</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Resources</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">
          © 2026 RAWKABLE AI. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}