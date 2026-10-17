import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const quickLinks = [
  { name: "About", to: "/about" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/experience" },
  { name: "Certifications", to: "/certifications" },
  { name: "Contact", to: "/contact" },
];

const expertise = [
  "Data Analysis",
  "Business Intelligence",
  "Data Visualization",
  "Data Modelling",
  "Scientific Data Analysis",
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 px-6 py-14 dark:border-slate-800">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-2 text-2xl font-bold uppercase tracking-wide">
            Dolapo Joseph
          </h3>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Data Analyst | Geology &amp; Scientific Data
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Combining technical experience, scientific reasoning and data
            analytics to turn complex information into meaningful insights.
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
            Expertise
          </h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-2">
              <FiMapPin className="text-accent" /> Nigeria
            </li>
            <li>
              <a
                href="mailto:ifedolapojoseph73@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <FiMail className="text-accent" /> ifedolapojoseph73@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dolapo-joseph-719207128?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <FiLinkedin className="text-accent" /> LinkedIn
                <FiArrowUpRight />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ifedolapojoseph73-create?tab=overview&from=2026-09-01&to=2026-09-30"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <FiGithub className="text-accent" /> GitHub
                <FiArrowUpRight />
              </a>
            </li>
          </ul>
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
