import Image from "next/image";

interface ExperienceCard {
  id: number;
  title: string;
  duration: string;
  description: string;
  bullets: string[];
  tools: string;
  icon: string;
  location: string;
  workType: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Raycura — Frontend Developer Intern",
    duration: "June 2025 — December 2025",
    location: "Nagpur, Maharashtra",
    workType: "On-site",
    description:
      "Worked as a Frontend Developer Intern helping the team build responsive and user-friendly web interfaces.",
    bullets: [
      "Developed reusable UI components and improved page layouts",
      "Fixed UI bugs and enhanced cross-browser responsiveness",
      "Collaborated with developers and designers on feature updates",
      "Wrote clean, readable and maintainable code",
    ],
    tools:
      "HTML • CSS • JavaScript • React.js • Next.js • Tailwind CSS • Bootstrap",
    icon: "/cards/card-1.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10 text-center">
          Work Experience
        </h2>

        {experienceCards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-md rounded-2xl p-8 lg:p-10 border-t-4 border-purple-700 shadow-2xl hover:shadow-purple-900 transition-all"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              <Image
                src={card.icon}
                alt={card.title}
                width={140}
                height={140}
                className="object-contain mx-auto lg:mx-0"
              />

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/40 text-purple-200 text-xs">
                    {card.workType}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs">
                    📍 {card.location}
                  </span>
                </div>

                {/* Duration — right under location */}
                <p className="text-white/60 text-sm mt-2 mb-4">
                  {card.duration}
                </p>

                <p className="text-white/85 text-sm mb-4">{card.description}</p>

                <ul className="text-white/75 text-sm space-y-2 mb-4 list-disc pl-5">
                  {card.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <p className="text-purple-300 text-xs font-medium">
                  {card.tools}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
