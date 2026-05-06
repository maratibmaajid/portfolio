const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" }
];

const experience = [
  {
    role: "Data Science Intern",
    org: "Chinar Quantum AI",
    period: "Dec 2024 - Jul 2025",
    summary:
      "Performed data analysis on real-world datasets using Python, built interactive dashboards with Streamlit, and implemented machine learning models with performance evaluation."
  },
  {
    role: "Summer Intern",
    org: "Power Grid Corporation of India",
    period: "Jul 2025 - Aug 2025",
    summary:
      "Studied power system operations and grid control mechanisms, observed load dispatch and substation operations, and gained hands-on exposure to transformers and circuit breakers."
  },
  {
    role: "Project Intern",
    org: "DRDO",
    period: "Dec 2025 - Feb 2026",
    summary:
      "Designed and simulated a laser synchronization system using feedback control, analyzed system stability and response characteristics, and worked on control systems with electronic circuit design."
  }
];

const skills = [
  "Python",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "Streamlit",
  "Data preprocessing",
  "EDA",
  "Visualization",
  "Supervised learning",
  "Unsupervised learning",
  "PCA",
  "Dimensionality reduction",
  "Communication",
  "Teamwork",
  "Leadership",
  "Coordination"
];

const certifications = [
  "Machine Learning Specialization — DeepLearning.AI, 2025",
  "Supervised Machine Learning: Regression and Classification — DeepLearning.AI, 2025",
  "Advanced Learning Algorithms — DeepLearning.AI, 2025",
  "Unsupervised Learning, Recommenders & Reinforcement Learning — DeepLearning.AI, 2025",
  "Data Analysis using Python — Chinar Quantum AI, 2025"
];

const leadership = [
  "TechnoCultural Event Lead — TechVaganza 2024",
  "Social Media & Publicity Co-Lead — Rang-e-Chinar 2025",
  "Social Media & Publicity Team Member — TEDx 2025"
];

const strengths = [
  "Strong communication and interpersonal skills",
  "Ability to manage and coordinate teams effectively",
  "Adaptability in fast-paced environments",
  "Problem-solving and initiative-driven mindset",
  "Machine learning and AI applications",
  "Event management and leadership roles",
  "Power systems and energy sector innovations"
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          MM
        </a>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Electrical Engineering • Data Analytics • ML</p>
            <h1>Maratib Maajid builds thoughtful technical work and leads with momentum.</h1>
            <p className="hero-text">
              B.Tech student at National Institute of Technology Srinagar with experience across
              data analysis, machine learning, power systems exposure, and event leadership.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Get in touch
              </a>
              <a
                className="button button-secondary"
                href={`${import.meta.env.BASE_URL}assets/resume/Maratib-Maajid-Resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <article>
              <span>Focus</span>
              <strong>Machine learning, analytics, and applied problem-solving</strong>
            </article>
            <article>
              <span>Education</span>
              <strong>B.Tech in Electrical Engineering, expected June 2027</strong>
            </article>
            <article>
              <span>Current strength</span>
              <strong>Combining technical skill with communication and coordination</strong>
            </article>
          </aside>
        </section>

        <section className="section split" id="about">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>Technical curiosity backed by real execution</h2>
          </div>
          <div className="section-body">
            <p>
              Maratib is a highly motivated Electrical Engineering student at NIT Srinagar with a
              strong interest in data analytics, machine learning, and practical systems work. He
              brings clear communication, team coordination, and leadership into technical spaces.
            </p>
            <p>
              His work spans data analysis with Python, interactive visualization, exposure to
              power systems operations, and project work in control-oriented engineering contexts.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Internships across data, systems, and engineering practice</h2>
          </div>
          <div className="stack">
            {experience.map((item) => (
              <article className="card" key={`${item.role}-${item.org}`}>
                <div className="card-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.org}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Data storytelling with interactive output</h2>
          </div>
          <article className="feature-card">
            <div>
              <h3>Global Cancer Data Analysis & Visualization</h3>
              <p>
                Conducted end-to-end analysis of a global dataset, identified demographic and
                regional trends, and built an interactive Streamlit web app for visualization.
              </p>
            </div>
            <div className="chips">
              <span>Python</span>
              <span>Streamlit</span>
              <span>EDA</span>
              <span>Visualization</span>
            </div>
          </article>
        </section>

        <section className="section split" id="skills">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Strong analytical base with practical tooling</h2>
            </div>
            <div className="chips">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="section-heading">
              <p className="eyebrow">Certifications</p>
              <h2>Focused learning in ML and analytics</h2>
            </div>
            <div className="stack">
              {certifications.map((item) => (
                <article className="list-card" key={item}>
                  {item}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section split" id="leadership">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Leadership</p>
              <h2>Campus roles built around coordination and visibility</h2>
            </div>
            <div className="stack">
              {leadership.map((item) => (
                <article className="list-card" key={item}>
                  {item}
                </article>
              ))}
            </div>
          </div>
          <div>
            <div className="section-heading">
              <p className="eyebrow">Strengths & Interests</p>
              <h2>People skills with a systems mindset</h2>
            </div>
            <div className="stack">
              {strengths.map((item) => (
                <article className="list-card" key={item}>
                  {item}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="section footer" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Open to internships, collaboration, and meaningful problem-solving</h2>
        </div>
        <div className="contact-grid">
          <a href="mailto:maratib32@gmail.com">maratib32@gmail.com</a>
          <a href="tel:+917889869893">+91 78898 69893</a>
          <a href="https://www.linkedin.com/in/maratib-maajid-19a7bb267/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/maratibmaajid" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
