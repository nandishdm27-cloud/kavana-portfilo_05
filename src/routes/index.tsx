import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-abstract.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavana Gowda — AI & ML Engineering Student Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Kavana Gowda, first-year B.Tech student in Artificial Intelligence & Machine Learning — projects, skills, certifications and achievements. Open to internships and research.",
      },
      { property: "og:title", content: "Kavana Gowda — AI & ML Engineering Student Portfolio" },
      {
        property: "og:description",
        content:
          "First-year B.Tech AI & ML student building practical machine learning projects. Seeking internships, hackathons and research opportunities.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Achievements", "achievements"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "C", "Java (basics)", "SQL", "HTML & CSS", "Git & GitHub"],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "Supervised learning",
      "Regression & classification",
      "Data preprocessing",
      "Model evaluation",
      "Prompt engineering",
      "Exploratory data analysis",
    ],
  },
  {
    group: "Tools & Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "Jupyter", "Google Colab"],
  },
  {
    group: "Professional",
    items: [
      "Technical writing",
      "Public speaking",
      "Team leadership",
      "Problem solving",
      "Time management",
      "Collaboration",
    ],
  },
];

const PROJECTS = [
  {
    no: "01",
    title: "Student Performance Predictor",
    role: "Solo build · Python, scikit-learn",
    body: "A regression model that forecasts semester outcomes from study habits, attendance and prior scores, packaged with a clean evaluation report and feature-importance analysis.",
    tags: ["Linear Regression", "Pandas", "Matplotlib"],
  },
  {
    no: "02",
    title: "Handwritten Digit Recognition",
    role: "Solo build · Python, neural networks",
    body: "A digit classifier trained on the MNIST dataset, tuned across architectures and learning rates to reach reliable accuracy, with a simple interface for live testing.",
    tags: ["Neural Networks", "NumPy", "Model Tuning"],
  },
  {
    no: "03",
    title: "Sentiment Analysis on Product Reviews",
    role: "Solo build · Python, NLP",
    body: "An end-to-end NLP pipeline — cleaning, tokenisation, vectorisation and classification — that turns unstructured review text into actionable sentiment signals.",
    tags: ["NLP", "TF-IDF", "Classification"],
  },
  {
    no: "04",
    title: "Personal Portfolio Website",
    role: "Solo build · Web",
    body: "A responsive, accessibility-minded personal site designed around a restrained editorial system — proof that engineering rigour and design taste can live together.",
    tags: ["Responsive Design", "UX Writing", "Deployment"],
  },
];

const CERTIFICATIONS = [
  ["Python for Everybody", "University of Michigan · Coursera"],
  ["Machine Learning Specialisation (in progress)", "DeepLearning.AI · Coursera"],
  ["Data Analysis with Python", "freeCodeCamp"],
  ["Fundamentals of Artificial Intelligence", "NPTEL"],
  ["Git & GitHub Essentials", "Online certification"],
];

const ACHIEVEMENTS = [
  {
    title: "Top 10 finish — Institute-level Hackathon",
    body: "Built and pitched a working AI prototype in under 24 hours with a four-member team.",
  },
  {
    title: "Merit admission into B.Tech AI & ML",
    body: "Secured a seat in a competitive AI & ML programme on academic merit.",
  },
  {
    title: "Departmental Technical Paper Presentation",
    body: "Presented on the practical limits of machine learning in healthcare diagnostics.",
  },
  {
    title: "Consistent academic standing",
    body: "Maintaining a first-class average while shipping projects outside coursework.",
  },
];

const EXPERIENCE = [
  {
    period: "2026 — Present",
    title: "Member, AI & Innovation Club",
    org: "Department of AI & ML",
    body: "Contribute to peer workshops on Python and machine learning fundamentals; help run internal build sprints for first-year students.",
  },
  {
    period: "2026 — Present",
    title: "Self-directed ML Practitioner",
    org: "Independent",
    body: "Ship one project per term, from problem framing through data collection, modelling and written documentation on GitHub.",
  },
  {
    period: "2026",
    title: "Volunteer Coordinator, Tech Fest",
    org: "College Technical Committee",
    body: "Coordinated logistics and participant communication for a campus technical event with 200+ attendees.",
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="hairline scroll-mt-20 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{title}</h2>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <a href="#top" className="font-display text-lg tracking-tight">
            Kavana&nbsp;Gowda
          </a>
          <nav className="hidden gap-6 text-xs tracking-wide text-muted-foreground lg:flex">
            {NAV.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="link-underline transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="border border-foreground px-4 py-2 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            Hire me
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-20">
            <div className="reveal">
              <p className="eyebrow">B.Tech · Artificial Intelligence &amp; Machine Learning</p>
              <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
                Building intelligent systems,
                <span className="block italic text-muted-foreground">
                  one disciplined idea at a time.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                I&rsquo;m Kavana Gowda — a first-year engineering student turning machine learning
                theory into working, documented projects. I&rsquo;m looking for internships,
                hackathon teams, research assistance and leadership roles where I can contribute
                early and learn fast.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-foreground px-7 py-3 text-xs tracking-[0.2em] uppercase text-background transition-opacity hover:opacity-85"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="border border-foreground px-7 py-3 text-xs tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
                >
                  Get in touch
                </a>
              </div>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["04", "Projects shipped"],
                  ["05", "Certifications"],
                  ["2029", "Expected graduation"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-3xl">{value}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Abstract monochrome study in light and shadow"
                width={1408}
                height={1760}
                className="w-full object-cover grayscale"
                style={{ boxShadow: "var(--shadow-luxe)" }}
              />
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="01 — About" title="A student who ships">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              I chose Artificial Intelligence &amp; Machine Learning because it sits exactly where
              mathematics, code and human impact meet — and because it rewards people who keep
              building after the syllabus ends.
            </p>
            <p>
              My approach is deliberately unglamorous: understand the problem, respect the data,
              measure honestly, then write it down so someone else can repeat it. That habit has
              already taken me from first Python scripts to end-to-end models with documented
              evaluation.
            </p>
            <p>
              Outside coursework I contribute to my department&rsquo;s AI club, help peers debug
              their first notebooks, and prepare for hackathons. I&rsquo;m early in my journey and
              fully aware of it — which is precisely why I work with the urgency of someone with a
              lot to prove.
            </p>
            <ul className="grid gap-4 pt-4 sm:grid-cols-2">
              {[
                "Open to internships & research assistance",
                "Available for hackathons & team builds",
                "Comfortable with remote collaboration",
                "Learning in public on GitHub",
              ].map((item) => (
                <li key={item} className="border-l border-foreground pl-4 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="02 — Skills" title="Technical & professional toolkit">
          <div className="grid gap-10 sm:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <h3 className="text-xl">{s.group}</h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-3 text-sm text-muted-foreground"
                    >
                      <span className="h-px w-4 shrink-0 translate-y-[-3px] bg-border" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" eyebrow="03 — Education" title="Academic foundation">
          <div className="space-y-10">
            <div className="border-l border-foreground pl-6">
              <p className="eyebrow">2025 — 2029 (expected)</p>
              <h3 className="mt-2 text-2xl">
                B.Tech, Artificial Intelligence &amp; Machine Learning
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">First year · Currently pursuing</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Core coursework in programming fundamentals, engineering mathematics, data
                structures, statistics and introductory machine learning. Supplementing the
                curriculum with self-directed projects and online specialisations.
              </p>
            </div>
            <div className="border-l border-border pl-6">
              <p className="eyebrow">Completed</p>
              <h3 className="mt-2 text-2xl">Higher Secondary — Science (PCM &amp; Computer)</h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Graduated with distinction in mathematics and computer science, which shaped the
                analytical base I now apply to modelling problems.
              </p>
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="04 — Projects" title="Selected work">
          <div className="divide-y divide-border border-t border-border">
            {PROJECTS.map((p) => (
              <article key={p.no} className="group py-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="font-display text-sm text-muted-foreground">{p.no}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl transition-opacity group-hover:opacity-70">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs tracking-wide text-muted-foreground">{p.role}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="border border-border px-3 py-1 text-[0.7rem] tracking-wide uppercase text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certifications" eyebrow="05 — Certifications" title="Continuous learning">
          <ul className="divide-y divide-border border-t border-border">
            {CERTIFICATIONS.map(([name, issuer]) => (
              <li
                key={name}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-base">{name}</span>
                <span className="text-xs tracking-wide text-muted-foreground">{issuer}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Achievements */}
        <Section id="achievements" eyebrow="06 — Achievements" title="Recognition & milestones">
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="bg-background p-7">
                <h3 className="text-lg leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="07 — Experience" title="Roles & contributions">
          <div className="space-y-10">
            {EXPERIENCE.map((e) => (
              <div key={e.title} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-8">
                <p className="eyebrow pt-1">{e.period}</p>
                <div>
                  <h3 className="text-xl">{e.title}</h3>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">{e.org}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="hairline scroll-mt-20 bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">
            <p className="eyebrow" style={{ color: "oklch(0.72 0 0)" }}>
              08 — Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
              Let&rsquo;s build something worth putting my name on.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed" style={{ opacity: 0.72 }}>
              Open to internships, research assistance, hackathon teams and student leadership
              roles. I reply to every serious message.
            </p>
            <div className="mt-12 grid gap-8 border-t pt-10 sm:grid-cols-3" style={{ borderColor: "oklch(1 0 0 / 0.2)" }}>
              {[
                ["Email", "kavana.gowda@example.com", "mailto:kavana.gowda@example.com"],
                ["LinkedIn", "/in/kavana-gowda", "https://linkedin.com"],
                ["GitHub", "@kavana-gowda", "https://github.com"],
              ].map(([label, value, href]) => (
                <div key={label}>
                  <p className="text-[0.7rem] tracking-[0.28em] uppercase" style={{ opacity: 0.6 }}>
                    {label}
                  </p>
                  <a href={href} className="link-underline mt-2 inline-block text-base">
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Kavana Gowda. All rights reserved.</p>
          <p>Designed &amp; built with intent.</p>
        </div>
      </footer>
    </div>
  );
}
