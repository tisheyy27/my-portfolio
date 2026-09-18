// ============================================================
// EDIT THIS BLOCK. Everything below it renders from this data,
// so you never have to touch the JSX to add or change content.
// ============================================================

const me = {
  name: "Tisha Bajaj",
  headline: "Teaching myself to build things that work end to end.",
  email: "tisheyy27@gmail.com",
  github: "https://github.com/tisheyy27",
  linkedin: "www.linkedin.com/in/tisha-bajaj-",
};
const projects = [
  {
    title: "Project name",
    role: "Solo build · 2026",
    body: "One or two sentences on what it does and who it's for. Lead with the problem it solves, not the tech. If it has real users or a number attached — downloads, uptime, teams using it — put that here.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    live: "https://example.com",
    code: "https://github.com/tisheyy27/project",
  },
  {
    title: "Second project",
    role: "Team of 4 · 2026",
    body: "What you personally owned matters more than what the team shipped. Say which part was yours — the API, the auth flow, the data pipeline.",
    stack: ["React", "Node.js", "MongoDB"],
    live: "",
    code: "https://github.com/tisheyy27/project-two",
  },
  {
    title: "Third project",
    role: "Hackathon · 2026",
    body: "Smaller builds are still worth listing if they show range. A CLI tool, a Chrome extension, a scraper — anything that shows you finish things.",
    stack: ["Python", "FastAPI"],
    live: "",
    code: "https://github.com/tisheyy27/project-three",
  },
];


 const experience = [
  {
    when: "2026 — present",
     title: "Software Development Intern",
     where: "Company name",
     what: "One line on what you shipped. Use a verb and an outcome: reduced page load from 4s to 900ms, built the notification service, migrated 12 endpoints off the legacy API.",
  },
   {
     when: "2025 — 2026",
     title: "Your earlier role",
     where: "Organisation or society",
     what: "Club positions, teaching assistantships and freelance work all count. Describe them the same way — what you did, what changed because of it.",
 },
];

const skills = [
  { group: "Languages", items: "C, Python, Java, SQL" },

  { group: "Tooling", items: "Git, Docker, Vercel, Netlify" },
];

// ============================================================
// Below here you only need to touch things if you want to
// change the layout itself.
// ============================================================

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="nav-mark">
            {me.name}
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience" className="nav-hide">
              Experience
            </a>
            <a href="#about" className="nav-hide">
              About
            </a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="wrap">
            <h1>{me.name}</h1>
            <p className="hero-line">
              <em>{me.headline}</em>
            </p>
            <div className="hero-meta">
              <span>{me.location}</span>
              <a href={me.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={me.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={me.resume}>Résumé</a>
            </div>
          </div>
        </header>

        <section className="section" id="work">
          <div className="wrap">
            <h2 className="section-head">Selected work</h2>
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <h3 className="project-title">
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="project-role">{p.role}</p>
                <p className="project-body">{p.body}</p>
                <ul className="stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Visit site
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer">
                      Read the code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <h2 className="section-head">Experience</h2>
            {experience.map((r) => (
              <div className="role" key={r.title + r.when}>
                <div className="role-when">{r.when}</div>
                <div>
                  <h3>{r.title}</h3>
                  <p className="role-where">{r.where}</p>
                  <p className="role-what">{r.what}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2 className="section-head">Tools I reach for</h2>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <p>{s.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="wrap">
            <h2 className="section-head">About</h2>
            <p>
              Two or three short paragraphs. Start with what you are doing right
              now — the degree, the job, the thing you are building — because
              that is what someone reading this wants to place you by.
            </p>
            <p>
              Then say what you are drawn to in the work. Not adjectives about
              yourself, but the kind of problem you like being handed. Someone
              hiring is trying to picture you on their team, and specifics do
              that better than enthusiasm does.
            </p>
            <p>
              Close with something human. What you read, build, play or argue
              about when you are not at a terminal.
            </p>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap">
            <h2 className="section-head">Contact</h2>
            <p className="contact-line">
              Open to internships and full-time software roles.
            </p>
            <a className="contact-mail" href={`mailto:${me.email}`}>
              {me.email}
            </a>
            <div className="contact-else">
              <a href={me.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={me.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={me.resume}>Résumé</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          Built with Next.js. © {new Date().getFullYear()} {me.name}.
        </div>
      </footer>
    </>
  );
}
