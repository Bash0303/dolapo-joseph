import { Link } from "react-router-dom";
import { FiMail, FiMapPin } from "react-icons/fi";

const quickLinks = [
  { name: "About", to: "/about" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/experience" },
  { name: "Contact", to: "/contact" },
];

const topics = [
  "Business Analytics",
  "Data Visualization",
  "Data Modelling",
  "Statistics",
  "Data Engineering",
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 px-6 py-14 dark:border-slate-800">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-2xl font-bold uppercase tracking-wide">
            Dolapo Joseph
          </h3>
          <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
            Data Analyst | Business Analytics | Geology &amp; Scientific Data
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Turning data into meaningful insights through analysis,
            visualization and clear communication.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="transition-colors hover:text-accent"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">
            Topics
          </h4>
          <ul className="mb-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>

          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <p className="flex items-center gap-2">
              <FiMail className="text-accent" /> ifedolapojoseph73@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="text-accent" /> Nigeria
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-200 pt-6 text-center text-sm dark:border-slate-800">
        <p className="text-slate-500">
          © 2026 Dolapo Joseph. All rights reserved.
        </p>
        <p className="mt-1 text-slate-500">
          Built with <span className="text-rose-500">❤️</span> and data
        </p>
      </div>
    </footer>
  );
}
