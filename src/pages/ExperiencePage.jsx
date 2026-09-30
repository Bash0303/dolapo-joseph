import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Data Analyst",
    company: "Freelance / Client Projects",
    period: "2023 – Present",
    description:
      "Deliver analytics projects for clients across retail, HR and marketing. Build dashboards in Power BI, automate reports with Excel Power Query, and translate raw data into decision-ready insights.",
  },
  {
    role: "Business Analytics (Self-Directed)",
    company: "Independent Learning & Projects",
    period: "2022 – 2023",
    description:
      "Completed structured analytics training covering SQL, Power BI, Excel, Python, and Data Modelling. Built a portfolio of end-to-end projects using real-world datasets.",
  },
  {
    role: "Geology & Scientific Research",
    company: "Academic / Research Background",
    period: "Before 2022",
    description:
      "Applied analytical and statistical methods to scientific datasets. Developed strong skills in data collection, validation, interpretation and reporting — the foundation of my analytics career today.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            JOURNEY
          </p>
          <h1 className="section-title">Experience</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            My professional journey.
          </p>
        </Reveal>

        <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-4 space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.15}>
              <div className="pl-8 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-primary" />
                <div className="card">
                  <div className="flex flex-wrap justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-accent text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent2 font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}