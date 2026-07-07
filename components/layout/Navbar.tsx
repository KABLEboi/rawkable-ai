"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-blue-500">RAWKABLE</span>
          <span className="text-white"> AI</span>
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Models
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>
        </nav>

        <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-500">
          Get Started
        </button>

      </div>
    </motion.header>
  );
}