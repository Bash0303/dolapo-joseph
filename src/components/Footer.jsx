import { FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Dolapo<span className="text-accent">.</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Data Analyst | Business Analytics | Geology & Scientific Data
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Turning data into meaningful insights through analysis,
            visualization and clear communication.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-accent transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-accent transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-accent transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Expertise + Contact */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">
            Expertise
          </h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <li>Data Analysis</li>
            <li>Data Visualization</li>
            <li>Data Modelling</li>
            <li>Business Intelligence</li>
            <li>Statistical Analysis</li>
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

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Dolapo Joseph. Built with React &
        Tailwind CSS.
      </div>
    </footer>
  );
}