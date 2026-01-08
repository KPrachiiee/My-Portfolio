"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner(): React.JSX.Element {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative top-10">

              <div className="lg:hidden -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400">
                        Prachi Kshirsagar
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <Image
                src="/assets/girl.png"
                alt="Prachi — Frontend Developer"
                width={300}
                height={300}
                className="max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />

              <Image
                src="/assets/me-glow.png"
                alt="Glow"
                width={300}
                height={300}
                className="max-w-md"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute"
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400">
                    Prachi Kshirsagar
                  </span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-2xl"> A Frontend Developer who </p>

              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Loves building
                <br /> beautiful & fast{" "}
                <span className="relative inline-block">
                  <Image
                    src="/assets/circle.png"
                    alt="Circle"
                    width={200}
                    height={200}
                    className="absolute mt-2"
                  />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    websites
                  </span>
                </span>
                .
              </h1>

              <p className="text-md text-white/80">
                Turning ideas into responsive, user-friendly interfaces using
                React, Next.js and modern web tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
