import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6 text-slate-700 dark:text-slate-300">
              <p>
                I'm a data analyst with 5+ years of experience helping
                businesses uncover insights hidden in their data. I specialize
                in building dashboards, automating reports, and applying
                statistical models to solve real-world problems.
              </p>
              <p>
                My toolkit spans Python, R, SQL, Tableau, Power BI, and cloud
                platforms like AWS and BigQuery. I thrive at the intersection
                of technical analysis and business strategy, translating
                complex data into stories stakeholders can act on.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <p className="text-4xl font-bold text-accent">5+</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">40+</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Projects Delivered
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">15+</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li>📍 Based in Lagos, Nigeria (Remote-friendly)</li>
                <li>🎓 BSc. Statistics, University of Lagos</li>
                <li>📊 Google Data Analytics Certified</li>
                <li>🏆 Kaggle Competitions Expert</li>
                <li>☕ Coffee-driven problem solver</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}