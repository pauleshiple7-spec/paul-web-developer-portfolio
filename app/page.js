const projects = [
  {
    number: "01",
    title: "Football Live Scores",
    description:
      "A football-focused application concept for fixtures, live scores, match details, teams and league information.",
    tags: ["Next.js", "JavaScript", "API"],
    status: "In progress",
  },
  {
    number: "02",
    title: "Student House Finder",
    description:
      "A responsive property-search concept designed to help students find accommodation by location, price and property type.",
    tags: ["React", "CSS", "UI/UX"],
    status: "Demo project",
  },
  {
    number: "03",
    title: "Medical Laboratory Website",
    description:
      "A professional website concept for a diagnostic laboratory, with services, test information, contact details and a clean responsive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Demo project",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Responsive Design",
  "REST APIs",
  "Git & GitHub",
  "UI/UX",
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#home" className="logo">PE<span>.</span></a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="#contact">Let's talk <span>↗</span></a>
      </nav>

      <section id="home" className="hero">
        <div className="heroGrid">
          <div>
            <p className="eyebrow"><span className="dot"></span> WEB DEVELOPER</p>
            <h1>I build websites<br />that <em>grow.</em></h1>
            <p className="heroText">
              I&apos;m Paul Eshiple, a web developer creating modern, responsive and practical websites and web applications for businesses, startups and individuals.
            </p>
            <div className="heroButtons">
              <a className="button primary" href="#projects">View my work <span>↗</span></a>
              <a className="button secondary" href="#contact">Contact me</a>
            </div>
          </div>

          <div className="heroCard">
            <div className="codeTop">
              <span>paul.dev</span>
              <span>● ● ●</span>
            </div>
            <pre>{`const developer = {
  name: "Paul Eshiple",
  role: "Web Developer",
  stack: [
    "JavaScript",
    "React",
    "Next.js"
  ],
  focus: "Great user experiences"
};`}</pre>
            <div className="cardFooter">Available for freelance projects & web opportunities</div>
          </div>
        </div>
        <div className="scrollHint">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section id="about" className="section about">
        <div className="sectionLabel">01 — ABOUT</div>
        <div>
          <h2>Turning ideas into <span>digital experiences.</span></h2>
          <p className="lead">
            I enjoy taking an idea and turning it into a useful, polished
            web experience. My focus is on responsive interfaces, clear
            navigation and functionality that makes sense to the user.
          </p>
          <p>
            I&apos;m currently building my portfolio through practical projects
            and continuously improving my JavaScript and modern web-development
            skills. I&apos;m open to freelance work, collaborations and junior
            web-development opportunities.
          </p>
        </div>
      </section>

      <section id="skills" className="section skillsSection">
        <div className="sectionLabel">02 — SKILLS</div>
        <div>
          <h2>Tools I use to <span>build.</span></h2>
          <div className="skillsGrid">
            {skills.map((skill) => <div className="skill" key={skill}>{skill}</div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section projectsSection">
        <div className="sectionLabel">03 — SELECTED WORK</div>
        <div className="projectsWrap">
          <div className="projectsIntro">
            <h2>Projects built to <span>solve problems.</span></h2>
            <p>
              These are personal and demo projects created to demonstrate my
              development skills. More projects will be added as I build.
            </p>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="projectNumber">{project.number}</div>
                <div className="projectBody">
                  <div className="projectStatus">{project.status}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="projectArrow">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="statement">
        <p>GOOD CODE. CLEAN DESIGN. <span>USEFUL PRODUCTS.</span></p>
      </section>

      <section id="contact" className="section contact">
        <div className="sectionLabel">04 — CONTACT</div>
        <div>
          <h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2>
          <p className="lead">
            If you need a website or web application, I&apos;d love to hear
            about it.
          </p>
          <div className="contactLinks">
            <a href="mailto:Pauleshiple7@gmail.com">Pauleshiple7@gmail.com <span>↗</span></a>
            <a href="https://wa.me/2348134783737" target="_blank" rel="noreferrer">WhatsApp — 08134783737 <span>↗</span></a>
            <a href="https://wa.me/2347026913217" target="_blank" rel="noreferrer">WhatsApp — 07026913217 <span>↗</span></a>
            <a href="https://github.com/pauleshiple7-spec" target="_blank" rel="noreferrer">GitHub — pauleshiple7-spec <span>↗</span></a>
          </div>
          <p className="editNote">
            LinkedIn can be added later when you have a profile.
          </p>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Paul Eshiple</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}