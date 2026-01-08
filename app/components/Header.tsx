"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-md border-b border-white/10"
    >
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">

          {/* LOGO */}
          <motion.h1
            whileHover={{ scale: 1.03 }}
            className="text-xl font-semibold text-white tracking-wide"
          >
            Prachi <span className="text-purple-400">Kshirsagar</span>
          </motion.h1>

          {/* NAV DESKTOP */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} className="hover:text-purple-400">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white border border-white/20 p-2 rounded-lg"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white" />
              <span className="block w-6 h-[2px] bg-white" />
              <span className="block w-6 h-[2px] bg-white" />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 bg-[#0b0415]/90 border border-white/10 rounded-xl p-5 space-y-4"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-white text-lg hover:text-purple-400"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
