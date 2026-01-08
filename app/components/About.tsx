"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            Hi, I’m{" "}
            <span className="text-purple-400 font-semibold">Prachi</span> — a
            4th-year Computer Science student and aspiring
            <span className="text-purple-400"> Frontend Developer</span>.
            <br />I love creating responsive, user-friendly and
            performance-focused web applications using modern tools and
            frameworks.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl overflow-hidden"
        >
          {/* ✨ glitter layer */}
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-twinkle absolute w-2 h-2 bg-white/40 rounded-full blur-sm top-6 left-10" />
            <div className="animate-twinkle absolute w-1.5 h-1.5 bg-purple-300/50 rounded-full blur-sm top-16 right-10" />
            <div className="animate-twinkle absolute w-2 h-2 bg-white/40 rounded-full blur-sm bottom-10 left-1/3" />
            <div className="animate-twinkle absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-sm bottom-6 right-1/4" />
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
            Skills
          </h3>

          <p className="text-white/70 text-center mb-6 text-sm md:text-base">
            Technologies I work with:
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 relative">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "TypeScript",
              "Bootstrap",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 md:px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-200 text-xs md:text-sm hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
            Education
          </h3>

          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-center"
          >
            <p className="text-white font-medium text-base md:text-lg">
              B.Tech — Computer Science
            </p>

            <p className="text-white/70 text-sm md:text-base">
              G H Raisoni University, Amravati
            </p>

            <p className="text-white/50 text-xs md:text-sm mt-1">
              2022 — Present
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
