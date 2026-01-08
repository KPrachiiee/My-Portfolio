"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "WanderLust — Travel Booking Platform",
    description:
      "A modern travel booking UI where users can browse stays, view property details, explore images, and interact with a clean, responsive interface designed for smooth user experience.",
    link: "https://github.com/KPrachiiee/wanderlust",
    image: "/projects/Project_1.png",
  },
  {
    id: 2,
    title: "Amazon Clone",
    description:
      "A fully responsive ecommerce UI inspired by Amazon — built with product cards, navigation bar, category sections, and cart-style interactions. Designed to look realistic while focusing on clean layout and user experience.",
    link: "https://github.com/KPrachiiee/Amazon-Clone-Frontend",
    image: "/projects/Project_2.png",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A modern streaming-style interface inspired by Netflix, featuring movie sections, hover previews, banners, and a responsive grid layout for an engaging viewing experience.",
    link: "https://github.com/KPrachiiee/Netflix-Clone",
    image: "/projects/Project_3.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-20 last:mb-0"
            >
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >

                {/* TEXT */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  <div className="relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                        isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-400 transition-colors duration-200 underline"
                      >
                        View Project →
                      </a>
                    </div>
                  )}
                </div>

                {/* IMAGE */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl"
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
