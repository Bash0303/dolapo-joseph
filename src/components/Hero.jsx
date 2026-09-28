import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/10" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent2/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl text-center">
        <p className="text-accent font-semibold mb-4">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Dolapo Joseph
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-600 dark:text-slate-400 mb-8 h-20 md:h-16">
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
            cursor={true}
            className="text-cyan-500 dark:text-cyan-400"
          />
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          I transform raw data into actionable insights that drive business
          decisions. Specialized in Python, SQL, Tableau, and Power BI.
        </p>

        <div className="flex gap-4 justify-center mb-10">
          <a
            href="#projects"
            className="bg-accent hover:bg-cyan-500 text-primary dark:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-primary dark:hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-6 justify-center text-2xl">
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
            href="mailto:dolapo@example.com"
            className="hover:text-accent transition-colors"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  );
}