import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12">
            Have a project or role in mind? Let's talk data.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500 dark:text-cyan-400 text-xl">
                  <FiMail />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    ifedolapojoseph73@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500 dark:text-cyan-400 text-xl">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    +234 (available on request)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500 dark:text-cyan-400 text-xl">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">Nigeria</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg transition-all"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-cyan-500 dark:text-cyan-400 text-center">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}