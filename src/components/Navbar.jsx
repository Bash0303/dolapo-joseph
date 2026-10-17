import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon, FiArrowRight } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const links = [
  { name: "About", to: "/about" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/experience" },
  { name: "Certifications", to: "/certifications" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors hover:text-accent ${
      isActive ? "text-accent" : ""
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-lg"
          : "bg-white/70 dark:bg-slate-900/70 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="leading-tight">
          <span className="block text-xl font-bold uppercase tracking-wide">
            DJ. Dolapo Joseph
          </span>
          <span className="hidden text-[11px] font-medium text-slate-500 dark:text-slate-400 lg:block">
            Data Analyst | Business Analytics | Geology &amp; Scientific Data
          </span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-7">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.to} className={linkClass} end={link.to === "/"}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-slate-300 dark:border-slate-600 hover:border-accent transition-colors"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Let&apos;s Talk
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-slate-300 dark:border-slate-600 hover:border-accent transition-colors"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="lg:hidden bg-white dark:bg-slate-900 px-6 py-4 space-y-3 border-t border-slate-200 dark:border-slate-700">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={linkClass}
                end={link.to === "/"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-slate-900"
            >
              Let&apos;s Talk
              <FiArrowRight />
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
