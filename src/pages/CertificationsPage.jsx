import { Link } from "react-router-dom";
import { FiArrowRight, FiAward, FiCalendar } from "react-icons/fi";
import Reveal from "../components/Reveal";

import axiaAnalysisImg from "../assets/Certificate in Data Analysis from Axia Africa.jpeg";
import axiaScienceImg from "../assets/Certificate in Data Science from Axia Africa.jpeg";
import quantiumImg from "../assets/Certificate of Completion from Quantium.jpeg";
import dataImmersedImg from "../assets/Certificate of Completion from the Data Immersed Community.jpeg";

const certificates = [
  {
    id: "axia-data-analysis",
    title: "Data Analysis",
    issuer: "Axia Africa — School of Data",
    date: "Sep 27, 2025",
    credential: "AX83332205",
    skills: ["Data Analysis", "Excel", "Reporting"],
    image: axiaAnalysisImg,
    accent: "cyan",
  },
  {
    id: "axia-data-science",
    title: "Data Science",
    issuer: "Axia Africa — School of Data",
    date: "Apr 17, 2026",
    credential: "AX43700669",
    skills: ["Data Science", "Statistical Analysis", "Modelling"],
    image: axiaScienceImg,
    accent: "violet",
  },
  {
    id: "quantium-job-sim",
    title: "Data Analytics Job Simulation",
    issuer: "Quantium — Issued by Forage",
    date: "Apr 1, 2026",
    credential: "EPR54fSoLha3LDgKT",
    skills: [
      "Customer Analytics",
      "Experimentation & Uplift Testing",
      "Commercial Application",
    ],
    image: quantiumImg,
    accent: "amber",
  },
  {
    id: "data-immersed",
    title: "Data Analyst Training",
    issuer: "The Data Immersed Community",
    date: "Nov 1, 2025",
    credential: "6-Month Program",
    skills: ["Excel", "SQL", "Power BI"],
    image: dataImmersedImg,
    accent: "rose",
  },
];

const ACCENT_STYLES = {
  cyan: {
    badge:
      "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    hover: "hover:border-cyan-500/60 hover:shadow-[0_24px_60px_-20px_rgba(6,182,212,0.35)]",
  },
  violet: {
    badge:
      "bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/30",
    hover: "hover:border-violet-500/60 hover:shadow-[0_24px_60px_-20px_rgba(139,92,246,0.35)]",
  },
  amber: {
    badge:
      "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
    hover: "hover:border-amber-500/60 hover:shadow-[0_24px_60px_-20px_rgba(245,158,11,0.35)]",
  },
  rose: {
    badge:
      "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30",
    hover: "hover:border-rose-500/60 hover:shadow-[0_24px_60px_-20px_rgba(244,63,94,0.35)]",
  },
};

export default function CertificationsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-accent font-semibold mb-3 tracking-widest text-sm">
            CERTIFICATIONS
          </p>
          <h1 className="section-title">Certifications</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            Professional certificates and training in data analytics, business
            intelligence and scientific data.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert, i) => {
            const accent = ACCENT_STYLES[cert.accent];
            return (
              <Reveal key={cert.id} delay={i * 0.12}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1.5 ${accent.hover}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate — ${cert.issuer}`}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-sm ${accent.badge}`}
                    >
                      {cert.issuer.split("—")[0].trim()}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-900/50 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-1 text-lg font-bold transition-colors group-hover:text-cyan-500">
                      {cert.title}
                    </h3>
                    <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </p>

                    <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="inline-flex items-center gap-2">
                        <FiCalendar className="text-accent" />
                        {cert.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <FiAward className="text-accent" />
                        {cert.credential}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        Key Skills
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="card mt-16 text-center py-12">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-500 dark:text-cyan-400">
              <FiAward />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Verified credentials, real-world training.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Each certificate represents hands-on training in data analytics,
              SQL, Power BI and data science — applied directly to the projects
              showcased in my portfolio.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-semibold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Request My Résumé
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
