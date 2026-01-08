"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-10 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact
          </h2>

          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            I’m open to internship / job opportunities in{" "}
            <span className="text-purple-400">Frontend Development</span>.
            <br />
            Have a project, collaboration or opportunity in mind? Let’s connect.
          </p>

          <a
            href="mailto:kshirsgarprachi73@gmail.com"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
            kshirsgarprachi73@gmail.com
          </a>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-12"
        >
          {/* GitHub */}
          <Link
            href="https://github.com/KPrachiiee"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="text-white text-xl" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/prachi-kshirsagar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-white text-xl" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Prachi Kshirsagar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
