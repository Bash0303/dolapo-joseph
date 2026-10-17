import { Link } from "react-router-dom";
import { FiArrowRight, FiAward } from "react-icons/fi";
import Reveal from "../components/Reveal";

export default function CertificationsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
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

        <Reveal delay={0.15}>
          <div className="card text-center py-14">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-500 dark:text-cyan-400">
              <FiAward />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Certification details are coming soon.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              I am currently compiling my certificates and training records in
              data analytics, SQL, Power BI and scientific research. This
              section will be updated with verified credentials and issuing
              institutions.
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
