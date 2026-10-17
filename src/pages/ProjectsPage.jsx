import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiZap,
  FiMessageSquare,
  FiTrendingUp,
} from "react-icons/fi";
import Reveal from "../components/Reveal";

import furnitureImg from "../assets/Furniture Market Sales and performance Analysis project image.jpeg";
import salesImg from "../assets/Sales Performance & Business Intelligence project image.jpeg";
import medicareImg from "../assets/Medicare Plus Healthcare Database design project image.jpeg";
import logisticsImg from "../assets/Logistic Performance Analysis project image.jpeg";
import travelImg from "../assets/US International Travel Analysis project image.jpeg";
import hotelImg from "../assets/SHG Hotel Booking Cancellation Analysis project image.jpeg";

const CATEGORIES = [
  "All",
  "Business & Sales",
  "Healthcare",
  "Logistics",
  "Travels & Hospitality",
];

const CATEGORY_STYLES = {
  "Business & Sales":
    "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
  Healthcare:
    "bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/30",
  Logistics:
    "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  "Travels & Hospitality":
    "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30",
};

const projects = [
  {
    id: "furniture-sales",
    category: "Business & Sales",
    title: "Furniture Market Sales Performance Analysis",
    description:
      "Analyzed U.S. furniture sales data to evaluate sales performance, profitability, product categories and regional contributions.",
    tools: ["Excel", "Power Query"],
    focus: [
      "Sales Performance",
      "Profitability",
      "Product Analysis",
      "Regional Analysis",
      "Data Transformation",
    ],
    image: furnitureImg,
    link: "https://medium.com/@ifedolapojoseph73/uncovering-profit-and-loss-drivers-in-the-furniture-market-an-excel-based-sales-performance-31e3f1c789bb",
  },
  {
    id: "sales-bi",
    category: "Business & Sales",
    title: "Sales Performance & Business Intelligence",
    description:
      "Developed an interactive Power BI sales analytics solution to examine actual performance, targets, achievement and business performance across areas, distributors and retailers.",
    tools: ["Power BI", "DAX", "Power Query", "Data Modelling"],
    focus: [
      "Actual vs Target",
      "Sales Value",
      "Sales Volume",
      "Distributor Performance",
      "Retailer Performance",
    ],
    image: salesImg,
    link: "https://github.com/ifedolapojoseph73-create/Chivita-Sales-Analysis",
  },
  {
    id: "medicare-db",
    category: "Healthcare",
    title: "MediCare Plus Healthcare Database",
    description:
      "Designed and developed a relational healthcare database to organize healthcare records and support structured querying and analysis.",
    tools: ["SQL Server", "T-SQL", "Database Design"],
    focus: [
      "Database Design",
      "Data Modelling",
      "SQL Queries",
      "Healthcare Data",
    ],
    image: medicareImg,
    link: "https://github.com/ifedolapojoseph73-create/MediCarePlus-Database/tree/main#2-project-overview",
  },
  {
    id: "logistics-performance",
    category: "Logistics",
    title: "Logistics Performance Analysis",
    description:
      "Analysed logistics data from 2020–2024 to understand shipment performance, delivery status and operational trends through interactive Power BI reporting.",
    tools: ["Power BI", "DAX", "Power Query"],
    focus: [
      "Shipping Performance",
      "Operational KPIs",
      "Year-over-Year Analysis",
      "Trend Analysis",
    ],
    image: logisticsImg,
    link: "https://medium.com/@ifedolapojoseph73/optimizing-logistics-performance-using-powerbi-a-data-driven-analysis-of-delivery-efficiency-and-c-223a250a2411",
  },
  {
    id: "us-travel",
    category: "Travels & Hospitality",
    title: "US International Travel Analysis",
    description:
      "Analysed more than three decades of U.S. outbound passenger travel data to identify destination preferences, travel seasonality, weekday patterns and changes in travel behaviour between 2020 and 2021.",
    dataset: ["46 Destinations", "4.1B Passengers", "32 Years"],
    tools: ["Excel", "PivotTables", "PivotCharts", "Excel Formulas"],
    focus: [
      "Travel Trends",
      "Destination Analysis",
      "Seasonality",
      "Year Comparison",
      "Dashboard Reporting",
    ],
    image: travelImg,
    link: "https://github.com/ifedolapojoseph73-create/US-Travel-Destination",
  },
  {
    id: "shg-hotel",
    category: "Travels & Hospitality",
    title: "SHG Hotel Booking Cancellations Analysis",
    description:
      "Analysed 119,390 hotel reservation records to investigate cancellation patterns, seasonality, booking lead time and the financial impact of cancellations across a City Hotel and a Resort Hotel.",
    dataset: ["119,390 Bookings", "2 Hotels", "2015–2017"],
    tools: ["Excel", "PivotTables", "Excel Formulas", "Dashboard Design"],
    focus: [
      "Cancellation Analysis",
      "Revenue Loss",
      "Seasonality",
      "Lead-Time Analysis",
      "Hotel Performance",
    ],
    image: hotelImg,
    link: "https://github.com/ifedolapojoseph73-create/SHG-Hotel-Cancellations-Dashboard",
  },
];

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Projects Delivered",
    note: "Across multiple analytical domains",
  },
  {
    value: 6,
    suffix: "",
    label: "Project Domains",
    note: "Business • Healthcare • Logistics • Travels • Hotel",
  },
  {
    value: 10,
    suffix: "+",
    label: "Analytics Tools",
    note: "Excel • Power BI • SQL • Python & more",
  },
  {
    value: 2,
    suffix: "",
    label: "Core Focus Areas",
    note: "Business Analytics & Finances",
  },
];

const ease = [0.22, 1, 0.36, 1];

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const start = performance.now();
    const duration = 1600;
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{String(count).padStart(2, "0")}</span>;
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, ease }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/60 hover:shadow-[0_24px_60px_-20px_rgba(6,182,212,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/15 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-sm ${
            CATEGORY_STYLES[project.category]
          }`}
        >
          {project.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-900/50 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.dataset && (
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
            {project.dataset.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-100 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-cyan-500">
          {project.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mb-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            Tools
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            Key Focus
          </p>
          <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
            {project.focus.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 transition-colors hover:text-cyan-400"
        >
          View Case Study
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="pt-32">
      {/* ── 02 PORTFOLIO SNAPSHOT ───────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.3)] dark:border-slate-700 dark:bg-slate-800/60">
                <p className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-4xl font-extrabold text-transparent">
                  <Counter value={stat.value} />
                  {stat.suffix}
                </p>
                <p className="mt-2 font-semibold">{stat.label}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 03 PROJECTS ─────────────────────────────────────── */}
      <section id="work" className="scroll-mt-28 px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                My Projects
              </p>
              <h2 className="section-title">
                Explore My Work Across Industries &amp; Domains
              </h2>
              <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
                From business and healthcare to logistics, travel, hospitality
                and finances, each project demonstrates how I apply data to
                answer practical questions and generate meaningful insights.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    filter === category
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-cyan-500 dark:text-slate-400"
                  }`}
                >
                  {filter === category && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/30"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 05 VIEW ALL PROJECTS ────────────────────────────── */}
      <section className="px-6 pb-20 text-center">
        <Reveal>
          <a
            href="https://github.com/ifedolapojoseph73-create"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 px-8 py-3.5 font-semibold transition-all hover:border-accent hover:text-accent dark:border-slate-600"
          >
            View All Projects
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </Reveal>
      </section>

      {/* ── 06 CTA ──────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 px-8 py-16 text-center dark:border-slate-700">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
            />

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Have a project in mind?
            </p>
            <h2 className="mx-auto mb-5 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
              Let&apos;s Turn Your Data Into{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
                Meaningful Insights.
              </span>
            </h2>
            <p className="mx-auto mb-9 max-w-xl text-slate-600 dark:text-slate-400">
              I&apos;m open to analytical projects, professional opportunities,
              collaborations and opportunities to apply data to real-world
              problems.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-semibold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Let&apos;s Connect
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <FiZap className="text-accent" /> Fast Response
              </span>
              <span className="inline-flex items-center gap-2">
                <FiMessageSquare className="text-accent" /> Clear Communication
              </span>
              <span className="inline-flex items-center gap-2">
                <FiTrendingUp className="text-accent" /> Result Driven
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
