import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Globe,
  ArrowRight,
  BarChart3,
  Database,
  Code2,
  Rocket,
} from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Project inquiry — Jason Guan Technologies"
    );
    const body = encodeURIComponent(
      `Hi Jason,

I'm interested in web application development / data analytics services. Here are a few details about my project:

- Goals:
- Timeline:
- Budget range:

Thanks!`
    );
    window.location.href = `mailto:zy21647gyb@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a
            href="#"
            className="font-semibold tracking-tight text-slate-900 text-lg"
          >
            Jason Guan <span className="text-slate-500">Technologies</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#stack" className="hover:text-slate-900">
              Stack
            </a>
            <a href="#projects" className="hover:text-slate-900">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/jason-guan-8a0ab5205"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
            >
              <Globe className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Data-driven web apps & analytics, built with care.
            </h1>
            <p className="mt-5 text-slate-600 text-lg">
              We build data-driven web applications and provide data analytics
              solutions for small businesses. From backend APIs to clean
              dashboards, we ship reliable software that scales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm hover:bg-slate-50"
              >
                See demo <Rocket className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Based in Cary, North Carolina — available remotely.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <BarChart3 className="h-6 w-6" />
                  <p className="mt-2 text-sm font-medium">
                    Analytics dashboards
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <Database className="h-6 w-6" />
                  <p className="mt-2 text-sm font-medium">
                    ETL & data pipelines
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <Code2 className="h-6 w-6" />
                  <p className="mt-2 text-sm font-medium">
                    APIs & integrations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Full-stack Web Apps",
                desc: "Django / FastAPI backends with React frontends. Clean architecture, tests, CI.",
              },
              {
                title: "Data Processing & Analytics",
                desc: "ETL pipelines, data cleaning, EDA, and insight reports with Python.",
              },
              {
                title: "Automation & Integrations",
                desc: "Cron jobs, API integrations, workflow automation, and lightweight ML.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm"
              >
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Tech stack</h2>
          <p className="mt-3 text-slate-600">
            Python, Django, FastAPI, React, PostgreSQL, Docker, GitHub Actions,
            AWS/Azure/GCP.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Demo projects
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Analytics Dashboard",
                desc: "KPI charts and cohort analysis with CSV upload.",
                link: "#",
              },
              {
                title: "API Starter",
                desc: "FastAPI template with auth, tests, and Docker.",
                link: "#",
              },
              {
                title: "ETL Starter",
                desc: "Ingest → clean → store pipeline with schedules.",
                link: "#",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm"
              >
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <a
                  href={p.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900 hover:underline"
                >
                  View details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Start a project
          </h2>
          <p className="mt-2 text-slate-600">
            Tell me a bit about your use-case and I'll get back within 1
            business day.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 grid md:grid-cols-6 gap-3"
          >
            <input
              className="md:col-span-3 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800"
            >
              Contact <Mail className="h-4 w-4" />
            </button>
            <a
              href="/Jason_Guan_Business_Description_OPT.pdf"
              className="md:col-span-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm hover:bg-slate-50"
            >
              <Globe className="h-4 w-4" /> Brief
            </a>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Jason Guan Technologies — Cary, NC — All
        rights reserved.
      </footer>
    </div>
  );
}
