"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">

          {/* NAME / LOGO */}
          <h1 className="text-xl font-semibold text-white tracking-wide">
            Prachi <span className="text-purple-400">Kshirsagar</span>
          </h1>

          {/* NAV LINKS — DESKTOP */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="#home" className="text-white hover:text-purple-400">
                Home
              </Link>
            </li>

            <li>
              <Link href="#about" className="text-white hover:text-purple-400">
                About
              </Link>
            </li>

            <li>
              <Link href="#contact" className="text-white hover:text-purple-400">
                Contact
              </Link>
            </li>
          </ul>

          {/* HAMBURGER — MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white border border-white/20 p-2 rounded-lg"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 bg-[#0b0415]/90 border border-white/10 rounded-xl p-5 space-y-4">
            <Link
              href="#home"
              onClick={() => setOpen(false)}
              className="block text-white text-lg hover:text-purple-400"
            >
              Home
            </Link>

            <Link
              href="#about"
              onClick={() => setOpen(false)}
              className="block text-white text-lg hover:text-purple-400"
            >
              About
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-white text-lg hover:text-purple-400"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
