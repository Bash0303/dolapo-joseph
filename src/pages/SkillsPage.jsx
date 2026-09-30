import {
  FiBarChart2,
  FiDatabase,
  FiCode,
  FiGrid,
  FiTrendingUp,
  FiLayers,
  FiPieChart,
  FiGitBranch,
} from "react-icons/fi";
import Reveal from "../components/Reveal";


const coreSkills = [
  {
    icon: <FiGrid />,
    name: "Excel",
    level: "Advanced",
    summary:
      "Data analysis, transformation, modelling and reporting.",
    capabilities: [
      "Pivot Tables",
      "Advanced Formulas",
      "Power Query",
      "Power Pivot",
      "Data Analysis",
      "Data Cleaning",
    ],
  },
  {
    icon: <FiDatabase />,
    name: "SQL",
    level: "Intermediate / Advanced",
    summary:
      "Querying, data extraction, relational databases and analytical data preparation.",
    capabilities: [
      "Complex Queries",
      "Joins",
      "Subqueries",
      "Aggregations",
      "CTEs",
      "Stored Procedures",
      "Database Design",
      "Data Manipulation",
    ],
  },
  {
    icon: <FiBarChart2 />,
    name: "Power BI",
    level: "Advanced",
    summary:
      "Interactive data visualization, business intelligence and analytical storytelling.",
    capabilities: [
      "Data Modelling",
      "DAX Measures",
      "Power Query",
      "KPI Development",
      "Interactive Dashboards",
      "Report Design",
      "Data Storytelling",
    ],
  },
  {
    icon: <FiCode />,
    name: "Python",
    level: "Developing / Intermediate",
    summary:
      "Data analysis, data manipulation and analytical scripting.",
    capabilities: [
      "Pandas",
      "NumPy",
      "Data Wrangling",
      "Exploratory Data Analysis",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
  },
  {
    icon: <FiLayers />,
    name: "Data Modelling",
    level: "Advanced / Strong Working Knowledge",
    summary:
      "Designing structured analytical models that support efficient reporting and analysis.",
    capabilities: [
      "Star Schema",
      "Fact & Dimension Tables",
      "Relationships",
      "Data Normalization",
      "Dimensional Modelling",
      "KPI Modelling",
    ],
  },
  {
    icon: <FiGitBranch />,
    name: "ETL & Data Processing",
    level: "Strong Working Knowledge",
    summary:
      "Extracting, cleaning, transforming and preparing data for analysis.",
    capabilities: [
      "Data Extraction",
      "Data Cleaning",
      "Data Transformation",
      "Data Validation",
      "Data Loading",
      "Power Query",
    ],
  },
  {
    icon: <FiTrendingUp />,
    name: "Statistics",
    level: "Working Knowledge",
    summary:
      "Applying statistical concepts to understand patterns, relationships and distributions within data.",
    capabilities: [
      "Descriptive Statistics",
      "Correlation Analysis",
      "Distributions",
      "Trend Analysis",
    ],
  },
];

const tools = [
  "Excel",
  "SQL Server",
  "Power BI",
  "Power Query",
  "DAX",
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "MySQL",
  "Jupyter Notebook",
  "GitHub",
];

const analyticalCapabilities = [
  {
    title: "Problem Solving",
    desc: "Breaking complex analytical problems into clear and measurable questions.",
  },
  {
    title: "Critical Thinking",
    desc: "Evaluating data carefully and questioning assumptions before drawing conclusions.",
  },
  {
    title: "Business Acumen",
    desc: "Understanding the context behind a dataset and connecting analysis to business objectives.",
  },
  {
    title: "Data Storytelling",
    desc: "Communicating analytical findings in a way that both technical and non-technical audiences can understand.",
  },
  {
    title: "Attention to Detail",
    desc: "Maintaining accuracy and consistency throughout the data preparation and analysis process.",
  },
  {
    title: "Communication",
    desc: "Presenting insights clearly through reports, dashboards and written explanations.",
  },
  {
    title: "Continuous Learning",
    desc: "Continuously developing technical and analytical capabilities through structured learning and practical projects.",
  },
];

const whatIBring = [
  {
    title: "Analytical Thinking",
    desc: "A structured approach to understanding problems and interpreting data.",
  },
  {
    title: "Data Preparation",
    desc: "Ability to clean, transform and validate datasets before analysis.",
  },
  {
    title: "Data Modelling",
    desc: "Experience designing structured models for business intelligence and reporting.",
  },
  {
    title: "Visualization",
    desc: "Ability to communicate findings through clear dashboards and reports.",
  },
  {
    title: "Multidisciplinary Perspective",
    desc: "A background in Geology and scientific research combined with Business Analytics.",
  },
  {
    title: "Continuous Development",
    desc: "Consistent development of technical skills through practical projects and learning.",
  },
];

const proficiency = [
  { label: "Excel", value: 90 },
  { label: "SQL", value: 80 },
  { label: "Power BI", value: 88 },
  { label: "Data Modelling", value: 82 },
  { label: "Python", value: 65 },
  { label: "Statistics", value: 70 },
];

const stack = [
  {
    n: "01",
    title: "Spreadsheet Analytics",
    items: ["Excel", "Power Query"],
  },
  {
    n: "02",
    title: "Database & SQL",
    items: ["SQL Server", "MySQL"],
  },
  {
    n: "03",
    title: "Business Intelligence",
    items: ["Power BI", "DAX", "Data Modelling"],
  },
  {
    n: "04",
    title: "Programming & Analysis",
    items: ["Python", "Pandas", "NumPy", "Jupyter"],
  },
  {
    n: "05",
    title: "Visualization",
    items: ["Power BI"],
  },
];


export default function SkillsPage() {
  return (
    <div id="skills" className="pt-32 pb-24 px-6">
      {/* ── HERO / INTRO ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            01 — HERO
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            My Skills
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
            Tools, Technologies & Expertise — I combine technical skills
            with analytical thinking to transform data into clear insights,
            meaningful visualizations and practical solutions.
          </p>
        </Reveal>
      </section>

    
      <section className="max-w-6xl mx-auto mb-24">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            02 — CORE TECHNICAL SKILLS
          </p>
          <h2 className="section-title">Core Technical Skills</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {coreSkills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.08}>
              <div className="card h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500 dark:text-cyan-400 text-2xl">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{skill.name}</h3>
                    <p className="text-accent text-sm font-medium">
                      {skill.level}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {skill.summary}
                </p>

                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                  Core capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs px-3 py-1 bg-slate-200 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-full"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto mb-24">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            03 — TOOLS & TECHNOLOGIES
          </p>
          <h2 className="section-title">Tools & Technologies</h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-3 mt-10">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 rounded-full font-medium hover:bg-cyan-500/20 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

     
      <section className="max-w-6xl mx-auto mb-24">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            04 — ANALYTICAL CAPABILITIES
          </p>
          <h2 className="section-title">
            Analytical & Professional Competencies
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {analyticalCapabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="card h-full">
                <h3 className="text-lg font-bold text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 05: WHAT I BRING TO THE TABLE ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            05 — WHAT I BRING TO THE TABLE
          </p>
          <h2 className="section-title">What I Bring to the Table</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {whatIBring.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="card h-full">
                <h3 className="text-lg font-bold text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 06: SKILL PROFICIENCY OVERVIEW ── */}
      <section className="max-w-4xl mx-auto mb-24">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            06 — SKILL PROFICIENCY OVERVIEW
          </p>
          <h2 className="section-title">Skill Proficiency Overview</h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card mt-10 space-y-6">
            {proficiency.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>{skill.label}</span>
                  <span className="text-accent">{skill.value}%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 07: MY CURRENT ANALYTICS STACK ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            07 — MY CURRENT ANALYTICS STACK
          </p>
          <h2 className="section-title">My Current Analytics Stack</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {stack.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.1}>
              <div className="card h-full">
                <p className="text-4xl font-extrabold text-accent/40 mb-2">
                  {item.n}
                </p>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 bg-slate-200 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 08: CALL TO ACTION ── */}
      <section className="max-w-4xl mx-auto mb-24">
        <Reveal>
          <div className="card text-center py-12">
            <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
              08 — CALL TO ACTION
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Let's Build Something With Data.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              I'm open to analytical projects, professional opportunities,
              collaborations and opportunities to apply data to real-world
              problems.
            </p>
            <a
              href="#contact"
              className="inline-block bg-accent hover:bg-cyan-500 text-primary dark:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all"
            >
              Let's Work Together
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}