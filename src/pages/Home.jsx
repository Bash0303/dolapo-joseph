import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import dolapo from "../assets/dolapo.png";

export default function Home() {
  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <Reveal>
          <div>
            <p className="text-accent font-semibold mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Dolapo Joseph
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-400 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  "Data Analyst",
                  2000,
                  "BI Specialist",
                  2000,
                  "SQL & Python Expert",
                  2000,
                  "Dashboard Storyteller",
                  2000,
                  "Insight Generator",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
                cursor
                className="text-cyan-500 dark:text-cyan-400"
              />
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              I transform raw data into actionable insights that drive
              business decisions. Specialized in Python, SQL, Tableau, and
              Power BI.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/projects"
                className="bg-accent hover:bg-cyan-500 text-primary dark:text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all inline-flex items-center gap-2"
              >
                View Projects <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-primary dark:hover:text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-6 text-2xl">
              <a href="#" className="hover:text-accent transition-colors">
                <FiGithub />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FiLinkedin />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FiTwitter />
              </a>
              <a
                href="mailto:ifedolapojoseph73@gmail.com"
                className="hover:text-accent transition-colors"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Photo side */}
        <Reveal delay={0.2}>
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-cyan-500/30 rounded-3xl blur-2xl" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-cyan-500/40 shadow-2xl">
             <img
                src="/dolapo.png"    
                alt="Dolapo Joseph"
                className="w-full h-full object-cover"
            />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}