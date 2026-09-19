"use client";

import { useEffect } from "react";

// ============================================================
// EDIT THIS BLOCK ONLY.
// ============================================================

const me = {
  name: "Tisha Bajaj",
  status: "bca student // learning to build",
    headline: "Curious about how things work. Stubborn about finding out.",
  location: "Delhi, India",
  email: "tisheyy27@gmail.com",
  github: "https://github.com/tisheyy27",
  linkedin: "https://www.linkedin.com/in/tisha-bajaj-",
  resume: "/resume.pdf",
};

const tags = ["Python", "C", "SQL", "Git", "Java", "Machine Learning"];

const skills = [
  { tag: "Programming & Logic", name: "Python", icon: "🐍", note: "Writing clean logic for automation, data handling, and working through problems step by step." },
  { tag: "Systems & Memory", name: "C", icon: "⚙️", note: "Pointers, memory, and the low-level thinking that makes every other language easier to reason about." },
  { tag: "Data Architecture", name: "SQL & Databases", icon: "🗄️", note: "Queries, joins, schema design, and thinking about how data should be shaped before it's stored." },
  { tag: "Version Control", name: "Git & GitHub", icon: "🌿", note: "Branches, commits, and keeping work public so it can be read." },
  { tag: "Learning now", name: "Java", icon: "☕", note: "Object-oriented fundamentals — classes, inheritance, and structuring larger programs properly." },
  { tag: "Learning now", name: "Machine Learning", icon: "🧠", note: "Supervised learning and dataset preprocessing. Early days, but the direction I want to go." },
];

const tools = [
  { icon: "🐍", name: "Python 3" },
  { icon: "⌨️", name: "VS Code" },
  { icon: "🌿", name: "Git & GitHub" },
  { icon: "🪐", name: "Google Colab" },
  { icon: "📓", name: "Jupyter Notebook" },
  { icon: "🗄️", name: "MySQL" },
  { icon: "💻", name: "GCC / C Compiler" },
  { icon: "🌐", name: "Netlify" },
  { icon: "🎨", name: "Canva" },
  { icon: "🖌️", name: "Figma" },
];

const education = [
  {
    when: "2025 — 2028",
    label: "Current degree",
    title: "Bachelor of Computer Applications (BCA)",
    where: "Bharati Vidyapeeth Institute of Management and Research (BVIMR), Delhi",
    what: "Programming in Python and C, database systems, data structures, and the foundations of artificial intelligence.",
  },
  {
    when: "Class XII, 2025",
    label: "Schooling",
    title: "Senior Secondary — Commerce",
    where: "Veda Vyasa DAV Public School, Vikaspuri, Delhi",
    what: "Commerce taught me how businesses work. Then I got curious about how the software running them works, and switched to computer applications for my degree.",
  },
];

const involvement = [
  {
    when: "2025 — present",
    label: "Technical society",
    title: "Creative Director, Core Team",
    where: "Quantaloop — Technical Society of BVIMR",
    what: "Part of the core team running the society's hackathons and technical events. I handle the creative side — event branding, posters, and the visual material that goes out before and during each event.",
  },
  {
    when: "2025 — present",
    label: "Incubation cell",
    title: "Co-Head, Social Media",
    where: "Nexel — Incubation Cell of BVIMR",
    what: "Co-leading social media for the campus incubation cell. Planning what goes out, writing and designing the posts, and keeping a consistent voice across everything we publish.",
  },
];

const focus = [
  { title: "Programming Fundamentals", note: "Getting properly comfortable in C and Java rather than knowing a little of many languages. Memory, structure, and how programs are actually organised." },
  { title: "Machine Learning Foundations", note: "Working through supervised learning end to end — cleaning a dataset, training something small, and understanding why it does or doesn't generalise." },
  { title: "Databases & Data Modelling", note: "Designing schemas that hold up, and writing queries that don't fall apart when the data grows." },
  { title: "Finishing What I Start", note: "Moving past tutorials to projects that run on their own. Something isn't done until someone else can open it." },
];

// ============================================================

export default function Home() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e: MouseEvent) => {
      if (!glow) return;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    const targets = document.querySelectorAll(
      ".section .eyebrow, .section .big, .section-intro, .cell, .chips li, .entry, .focus-item, .contact-cell, .about-copy p, .about-facts > div"
    );

    targets.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("mousemove", move);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" id="cursor-glow" />

      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="nav-mark">TISHA<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills" className="nav-hide">Skills</a>
            <a href="#tools" className="nav-hide">Tools</a>
            <a href="#education" className="nav-hide">Education</a>
            <a href="#involvement" className="nav-hide">Societies</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="wrap">
            <p className="hero-prompt">{me.status}</p>
            <h1>Hi, I&apos;m Tisha<span className="caret">_</span></h1>
            <p className="hero-line">{me.headline}</p>
            <ul className="hero-tags">
              {tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="hero-meta">
              <span>{me.location}</span>
              <a href={me.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={me.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={me.resume}>Résumé</a>
            </div>
          </div>
        </header>

        <section className="section band" id="about">
          <div className="wrap">
            <span className="eyebrow">About me</span>
            <div className="about-split">
              <div>
                <h3 className="big">Learning in public, one build at a time<span className="dot">.</span></h3>
              </div>
              <div className="about-copy">
                <p>
                  I came to programming from commerce, and started my BCA at
                  Bharati Vidyapeeth (BVIMR), Delhi without a line of code
                  behind me. Starting from zero meant I couldn&apos;t skip the
                  fundamentals, which turned out to be the better way in.
                </p>
                <p>
                  I work mostly in Python and C, with SQL for anything
                  involving data, and I&apos;m adding Java and the basics of
                  machine learning. I&apos;ve kept the stack small on purpose.
                  I&apos;d rather explain why a pointer behaves the way it does
                  than list ten frameworks I&apos;ve only seen once.
                </p>
                <p>
                  Outside coursework I sit on the core teams of two campus
                  societies — running hackathons and events at one, leading
                  social media at the other. The part I like most is the one
                  nobody films for tutorials: the hour where something almost
                  works. That&apos;s usually where I learn the thing I&apos;ll
                  still remember six months later.
                </p>
                <div className="about-facts">
                  <div>
                    <span>Based in</span>
                    <strong>Delhi, India</strong>
                  </div>
                  <div>
                    <span>Studying</span>
                    <strong>BCA, BVIMR</strong>
                  </div>
                  <div>
                    <span>Currently</span>
                    <strong>Java &amp; ML</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="wrap center-head">
            <span className="eyebrow">Core stack</span>
            <h2 className="big">Skills &amp; Technologies<span className="dot">.</span></h2>
            <p className="section-intro">
              A small stack, learned properly rather than a long list learned once.
            </p>
            <div className="grid">
              {skills.map((s) => (
                <div className="cell" key={s.name}>
                  <div className="cell-icon">{s.icon}</div>
                  <h3>{s.name}</h3>
                  <p className="cell-tag">{s.tag}</p>
                  <p>{s.note}</p>
                  <span className="cell-bar" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="tools">
          <div className="wrap center-head">
            <span className="eyebrow">Environment</span>
            <h2 className="big">Tools I work in<span className="dot">.</span></h2>
            <p className="section-intro">What I actually have open on a given day.</p>
            <ul className="chips">
              {tools.map((t) => (
                <li key={t.name}>
                  <span className="chip-icon">{t.icon}</span>
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="education">
          <div className="wrap center-head">
            <span className="eyebrow">Academic background</span>
            <h2 className="big">Education<span className="dot">.</span></h2>
            <p className="section-intro">Where the foundations are coming from.</p>
            {education.map((e) => (
              <div className="entry" key={e.title + e.where}>
                <div className="entry-when">
                  <p className="entry-label">{e.label}</p>
                  {e.when}
                </div>
                <div>
                  <h3>{e.title}</h3>
                  <p className="entry-where">{e.where}</p>
                  <p className="entry-what">{e.what}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section band" id="involvement">
          <div className="wrap center-head">
            <span className="eyebrow">Beyond coursework</span>
            <h2 className="big">Societies &amp; roles<span className="dot">.</span></h2>
            <p className="section-intro">
              Where I do the organising, designing and shipping that class doesn&apos;t cover.
            </p>
            {involvement.map((r) => (
              <div className="entry" key={r.title + r.where}>
                <div className="entry-when">
                  <p className="entry-label">{r.label}</p>
                  {r.when}
                </div>
                <div>
                  <h3>{r.title}</h3>
                  <p className="entry-where">{r.where}</p>
                  <p className="entry-what">{r.what}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="focus">
          <div className="wrap center-head">
            <span className="eyebrow">Current objectives</span>
            <h2 className="big">What I&apos;m working on<span className="dot">.</span></h2>
            <p className="section-intro">
              What I&apos;m building, breaking, and slowly getting better at.
            </p>
            <div className="focus-list">
              {focus.map((f, i) => (
                <div className="focus-item" key={f.title}>
                  <span className="focus-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="contact">
          <div className="wrap center-head">
            <span className="eyebrow">Get in touch</span>
            <h2 className="big">Let&apos;s connect<span className="dot">.</span></h2>
            <p className="section-intro">
              Happy to talk about anything I&apos;m learning, or anything you think I should be.
            </p>
            <div className="contact-grid">
              <a className="contact-cell" href={`mailto:${me.email}`}>
                <p className="contact-key">Email</p>
                <p className="contact-val">{me.email}</p>
              </a>
              <a className="contact-cell" href={me.github} target="_blank" rel="noreferrer">
                <p className="contact-key">GitHub</p>
                <p className="contact-val">@tisheyy27</p>
              </a>
              <a className="contact-cell" href={me.linkedin} target="_blank" rel="noreferrer">
                <p className="contact-key">LinkedIn</p>
                <p className="contact-val">Tisha Bajaj</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          © {new Date().getFullYear()} {me.name} — built with Next.js
        </div>
      </footer>
    </>
  );
}