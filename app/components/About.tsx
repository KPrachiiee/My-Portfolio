import Image from "next/image";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          About Me
        </h2>

        {/* Intro text */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            Hi, I’m{" "}
            <span className="text-purple-400 font-semibold">Prachi</span> — a
            4th-year Computer Science student and aspiring
            <span className="text-purple-400"> Frontend Developer</span>.
            <br />
            I love creating responsive, user-friendly and
            performance-focused web applications using modern tools and
            frameworks.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
            Skills
          </h3>

          <p className="text-white/70 text-center mb-6 text-sm md:text-base">
            Technologies I work with:
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "TypeScript",
              "Bootstrap",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 md:px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-200 text-xs md:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-14">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
            Education
          </h3>

          <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-center">
            <p className="text-white font-medium text-base md:text-lg">
              B.Tech — Computer Science
            </p>

            <p className="text-white/70 text-sm md:text-base">
              G H Raisoni University, Amravati
            </p>

            <p className="text-white/50 text-xs md:text-sm mt-1">
              2022 — Present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
