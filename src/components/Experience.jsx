import Reveal from "./Reveal";

const experiences = [
  {
    role: "Senior Data Analyst",
    company: "Flutterwave",
    period: "2022 – Present",
    description:
      "Lead analytics for the payments division, building dashboards that monitor $2B+ in monthly transactions. Mentor junior analysts and drive data literacy across teams.",
  },
  {
    role: "Data Analyst",
    company: "Paystack",
    period: "2020 – 2022",
    description:
      "Developed customer segmentation models and automated reporting pipelines that reduced manual work by 70%. Partnered with product teams on A/B tests.",
  },
  {
    role: "Junior Data Analyst",
    company: "Andela",
    period: "2019 – 2020",
    description:
      "Built foundational reporting in SQL and Tableau, supporting talent acquisition and operations teams with weekly KPI tracking.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="section-title">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            My professional journey.
          </p>
        </Reveal>

        <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-4 space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.15}>
              <div className="pl-8 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 bg-accent rounded-full border-4 border-slate-100 dark:border-primary" />
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
    </section>
  );
}