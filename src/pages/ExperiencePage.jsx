import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiDatabase,
  FiFilter,
  FiGitBranch,
  FiGrid,
  FiPieChart,
} from "react-icons/fi";
import { SiJupyter, SiNumpy, SiPandas, SiPython } from "react-icons/si";
import Reveal from "../components/Reveal";

const responsibilities = [
  "Support the preparation and delivery of undergraduate geology laboratory practicals.",
  "Assist with laboratory exercises involving grain-size analysis, moisture content, Atterberg limits and specific gravity.",
  "Support students during practical sessions and assist with the assessment of practical work.",
  "Provide technical support for geological research and departmental academic activities.",
  "Assist with laboratory equipment, materials and general technical operations.",
  "Contribute to departmental activities and institutional responsibilities.",
];

const analyticsTracks = [
  {
    title: "Business Intelligence & Power BI",
    items: [
      "Developed interactive dashboards for sales performance and target achievement.",
      "Worked with actual sales values, target values, sales volumes and performance indicators.",
      "Explored distributor, retailer and area-level performance.",
      "Applied data modelling, Power Query and DAX measures to support reporting.",
    ],
    featured: "Sales Performance & Business Intelligence Dashboard.",
  },
  {
    title: "SQL & Database Development",
    items: [
      "Designed relational database structures for healthcare information.",
      "Developed SQL queries to retrieve and analyse structured data.",
      "Worked with fact tables, dimension tables and data relationships.",
      "Applied SQL to academic performance data and database projects.",
    ],
    featured:
      "MediCare Plus Healthcare Database and USEAPD Academic Performance Analysis.",
  },
  {
    title: "Excel Analytics",
    items: [
      "Cleaned and transformed datasets for analysis.",
      "Used Excel tools to summarize data and identify patterns.",
      "Developed dashboard-based reporting solutions.",
      "Analysed travel trends and hotel booking cancellations.",
    ],
    featured:
      "US International Travel Dashboard and SHG Hotel Booking Cancellations Analysis.",
  },
  {
    title: "Logistics Analytics",
    items: [
      "Analysed logistics data covering 2020–2024.",
      "Examined shipping status and operational performance.",
      "Developed Power BI reports to communicate trends and performance indicators.",
    ],
    featured: "Logistics Performance Analysis.",
  },
];

const areasOfExperience = [
  "Geological laboratory practicals and measurements.",
  "Grain-size analysis and soil characterization.",
  "Groundwater quality assessment.",
  "Hydrogeological research.",
  "Interpretation of scientific and environmental data.",
  "Academic research and technical reporting.",
];

const qualifications = [
  "B.Sc. Geology — Ajayi Crowther University.",
  "M.Sc. Hydrogeology — Ajayi Crowther University.",
  "Ph.D. — In view.",
];

const researchInterests = [
  "Groundwater quality and hydrochemistry.",
  "Environmental geochemistry.",
  "Soil and sediment characterization.",
  "Scientific data analysis and visualization.",
];

const domains = [
  {
    title: "Business & Sales",
    desc: "Sales performance, target achievement, profitability and business reporting.",
  },
  {
    title: "Healthcare",
    desc: "Healthcare database design and structured data management.",
  },
  {
    title: "Logistics",
    desc: "Shipping performance, delivery status and operational reporting.",
  },
  {
    title: "Education",
    desc: "Academic performance analysis and student data.",
  },
  {
    title: "Travel & Hospitality",
    desc: "International travel patterns, hotel booking cancellations and revenue-related analysis.",
  },
  {
    title: "Earth Science",
    desc: "Geological research, groundwater quality and scientific data interpretation.",
  },
  {
    title: "Data Science",
    desc: "Exploratory analysis, statistical thinking, data preparation and insight-driven problem solving using Python.",
  },
];

const capabilities = [
  "Technical and scientific support.",
  "Data collection, cleaning and validation.",
  "Exploratory data analysis.",
  "SQL querying and database design.",
  "Data modelling and transformation.",
  "Power BI dashboard development.",
  "KPI reporting and visualization.",
  "Scientific interpretation and technical reporting.",
  "Analytical problem-solving.",
  "Communication of findings.",
];

const tools = [
  { name: "Microsoft Excel", icon: <FiGrid /> },
  { name: "Power BI", icon: <FiBarChart2 /> },
  { name: "SQL Server", icon: <FiDatabase /> },
  { name: "T-SQL", icon: <FiGitBranch /> },
  { name: "Power Query", icon: <FiFilter /> },
  { name: "DAX", icon: <FiPieChart /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Jupyter Notebook", icon: <SiJupyter /> },
];

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
      {children}
    </li>
  );
}

function Label({ children }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
      {children}
    </p>
  );
}

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 px-6">
      {/* ── 01 MY EXPERIENCE ─────────────────────────────────── */}
      <section className="mx-auto mb-24 max-w-6xl">
        <Reveal>
          <Label>My Experience</Label>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            My Professional Journey
          </h1>
          <p className="text-lg md:text-xl font-semibold text-accent2 mb-4">
            From Geology to Data Analytics
          </p>
          <p className="max-w-3xl text-slate-600 dark:text-slate-400">
            My professional journey combines technical experience, scientific
            research and a growing specialization in data analytics. I apply
            analytical thinking, structured problem-solving and data
            visualization to understand complex information and communicate
            meaningful insights.
          </p>
        </Reveal>
      </section>

      {/* ── 02 PROFESSIONAL EXPERIENCE ───────────────────────── */}
      <section className="mx-auto mb-24 max-w-5xl">
        <Reveal>
          <Label>02 — Professional Experience</Label>
          <h2 className="section-title">Professional Experience</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 border-l-2 border-slate-300 pl-8 dark:border-slate-700">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-accent dark:border-primary" />

            <div className="card">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  November 2022 – Present
                </span>
              </div>

              <h3 className="text-2xl font-bold">Technologist II</h3>
              <p className="mt-1 font-medium text-accent2">
                Ajayi Crowther University, Oyo, Nigeria
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Department of Geological Sciences
              </p>

              <div className="mt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Role Overview
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Supporting geological teaching, laboratory practicals and
                  scientific activities within the Department of Geological
                  Sciences. My responsibilities involve laboratory preparation,
                  technical support, student practicals and the handling of
                  geological materials and measurements.
                </p>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Key Responsibilities
                </p>
                <ul className="space-y-2">
                  {responsibilities.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Professional Development
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  My technical role has strengthened my attention to detail,
                  scientific reasoning, data interpretation and practical
                  problem-solving capabilities that complement my development in
                  data analytics.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 03 DATA ANALYTICS DEVELOPMENT ────────────────────── */}
      <section className="mx-auto mb-24 max-w-6xl">
        <Reveal>
          <Label>03 — Data Analytics Development</Label>
          <h2 className="section-title">Building Practical Skills Through Projects</h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            I am developing my expertise in data analytics and business
            intelligence through structured learning and practical projects. My
            work focuses on transforming datasets into useful insights through
            data preparation, querying, analysis, visualization and reporting.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {analyticsTracks.map((track, i) => (
            <Reveal key={track.title} delay={i * 0.08}>
              <div className="card h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-500/10 p-3 text-xl text-cyan-500 dark:text-cyan-400">
                    <FiBriefcase />
                  </div>
                  <h3 className="text-xl font-bold">{track.title}</h3>
                </div>

                <ul className="space-y-2">
                  {track.items.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>

                <p className="mt-5 rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-600 dark:bg-slate-800/70 dark:text-slate-400">
                  <span className="font-semibold text-accent">
                    Featured project:{" "}
                  </span>
                  {track.featured}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-semibold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Explore My Projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── 04 SCIENTIFIC & RESEARCH BACKGROUND ──────────────── */}
      <section className="mx-auto mb-24 max-w-6xl">
        <Reveal>
          <Label>04 — Scientific &amp; Research Background</Label>
          <h2 className="section-title">Geology, Research &amp; Data Interpretation</h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            My academic and professional background in Geology has provided a
            foundation in scientific observation, data collection, laboratory
            measurements and evidence-based interpretation.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="card h-full">
              <h3 className="mb-4 text-lg font-bold text-accent">
                Areas of Experience
              </h3>
              <ul className="space-y-2">
                {areasOfExperience.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card h-full">
              <h3 className="mb-4 text-lg font-bold text-accent">
                Academic Qualifications
              </h3>
              <ul className="space-y-3">
                {qualifications.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0 text-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.19}>
            <div className="card h-full">
              <h3 className="mb-4 text-lg font-bold text-accent">
                Selected Research Interests
              </h3>
              <ul className="space-y-2">
                {researchInterests.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 05 PROJECT DOMAINS ───────────────────────────────── */}
      <section className="mx-auto mb-24 max-w-6xl">
        <Reveal>
          <Label>05 — Project Domains</Label>
          <h2 className="section-title">Areas of Application</h2>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
            Where I have applied and developed my analytical skills across
            industries and scientific fields.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={i * 0.07}>
              <div className="card h-full">
                <p className="text-3xl font-extrabold text-accent/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-bold">{domain.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  {domain.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 06 CORE CAPABILITIES ─────────────────────────────── */}
      <section className="mx-auto mb-24 max-w-5xl">
        <Reveal>
          <Label>06 — Core Responsibilities &amp; Capabilities</Label>
          <h2 className="section-title">Core Capabilities</h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="card flex items-center gap-3 py-4 text-slate-600 dark:text-slate-400"
              >
                <FiCheckCircle className="shrink-0 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 07 TOOLS & TECHNOLOGIES ──────────────────────────── */}
      <section className="mx-auto mb-24 max-w-6xl">
        <Reveal>
          <Label>07 — Tools &amp; Technologies</Label>
          <h2 className="section-title">Tools Used in My Analytics Work</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.05}>
              <div className="card group flex h-full flex-col items-center gap-3 py-6 text-center">
                <span className="rounded-xl bg-cyan-500/10 p-4 text-3xl text-cyan-500 transition-colors group-hover:bg-cyan-500/20 dark:text-cyan-400">
                  {tool.icon}
                </span>
                <span className="text-sm font-semibold">{tool.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 08 CALL TO ACTION ────────────────────────────────── */}
      <section className="mx-auto max-w-5xl">
        <Reveal>
          <div className="card relative overflow-hidden py-14 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
            />

            <Label>08 — Call to Action</Label>
            <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-extrabold md:text-4xl">
              Let&apos;s Connect and Create Impact With Data.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-slate-600 dark:text-slate-400">
              I&apos;m continuing to develop my analytical capabilities and
              welcome opportunities to contribute to data-driven projects,
              collaborate with other professionals and apply analytical thinking
              to real-world problems.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-semibold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Let&apos;s Connect
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
