import { FiExternalLink, FiGithub } from "react-icons/fi";
import Reveal from "../components/Reveal";

const projects = [
  {
    title: "Retail Sales Dashboard",
    description:
      "Interactive Power BI dashboard analyzing 2M+ retail transactions across 50 stores, revealing seasonal trends that increased inventory efficiency by 23%.",
    tags: ["Power BI", "SQL", "ETL"],
    link: "#",
    github: "#",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Built an ML model in Python (XGBoost) predicting customer churn with 89% accuracy, saving the company an estimated $450K annually in retention costs.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    link: "#",
    github: "#",
  },
  {
    title: "Marketing Attribution Analysis",
    description:
      "Designed a multi-touch attribution model in SQL to measure channel ROI, redirecting 30% of ad spend to higher-performing channels.",
    tags: ["SQL", "Excel", "Data Modelling"],
    link: "#",
    github: "#",
  },
  {
    title: "COVID-19 Data Explorer",
    description:
      "Public-facing visualization of COVID trends across 200+ countries using Python, Pandas and Matplotlib.",
    tags: ["Python", "Pandas", "Matplotlib"],
    link: "#",
    github: "#",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Power BI dashboard tracking employee engagement, attrition, and diversity metrics for a 5,000-person organization.",
    tags: ["Power BI", "DAX", "Excel"],
    link: "#",
    github: "#",
  },
  {
    title: "Sales Forecasting Pipeline",
    description:
      "Automated forecasting workflow using Excel Power Query and Python, reducing manual reporting time from 15 hours to 30 minutes weekly.",
    tags: ["Excel", "Power Query", "Python"],
    link: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            PORTFOLIO
          </p>
          <h1 className="section-title">Featured Projects</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            A selection of my recent analytics work.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <div className="card flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-accent">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-lg">
                      <a
                        href={project.github}
                        className="hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href={project.link}
                        className="hover:text-accent transition-colors"
                        aria-label="Live"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}