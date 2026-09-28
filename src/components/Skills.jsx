import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Programming & Query",
    skills: ["Python (Pandas, NumPy)", "R", "SQL", "VBA", "Bash"],
  },
  {
    title: "Visualization & BI",
    skills: ["Tableau", "Power BI", "Looker Studio", "Plotly", "Matplotlib"],
  },
  {
    title: "Data Engineering",
    skills: ["PostgreSQL", "BigQuery", "Snowflake", "Apache Airflow", "dbt"],
  },
  {
    title: "Analytics & ML",
    skills: [
      "Statistics",
      "A/B Testing",
      "Scikit-learn",
      "Time Series",
      "Predictive Modeling",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            The technologies I use to turn data into decisions.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.1}>
              <div className="card h-full">
                <h3 className="text-xl font-bold mb-4 text-accent">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-200 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}