import "./App.css";

const skills = [
  {
    icon: "</>",
    name: "Programming",
    description: "Web, App, DSA",
    style: "blue",
  },
  {
    icon: "●",
    name: "Design",
    description: "UI/UX, Graphics",
    style: "purple",
  },
  {
    icon: "▶",
    name: "Content",
    description: "Video, Editing",
    style: "pink",
  },
  {
    icon: "↗",
    name: "Marketing",
    description: "Digital, Social",
    style: "teal",
  },
  {
    icon: "Aa",
    name: "Languages",
    description: "Communication",
    style: "violet",
  },
  {
    icon: "▢",
    name: "Academics",
    description: "Subjects, Exams",
    style: "orange",
  },
];

const features = [
  {
    number: "01",
    title: "Learn from others",
    description:
      "Find students and Resource Persons who can help you learn practical skills.",
  },
  {
    number: "02",
    title: "Share what you know",
    description:
      "Turn your skills into courses, sessions or services and help someone else grow.",
  },
  {
    number: "03",
    title: "Exchange skills",
    description:
      "Use Skill Credits to exchange knowledge and collaborate with other students.",
  },
];

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="navbar-container">

          <a href="#" className="brand">
            SkillSwap
          </a>

          <nav className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#explore">Browse Skills</a>
            <a href="#benefits">Benefits</a>
            <a href="#community">Community</a>
          </nav>

          <div className="nav-actions">
            <button className="login-btn">
              Log in
            </button>

            <button className="signup-btn">
              Sign up
              <span>→</span>
            </button>
          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero">

          <div className="hero-glow hero-glow-left"></div>
          <div className="hero-glow hero-glow-right"></div>

          <div className="hero-container">

            {/* LEFT */}

            <div className="hero-content">

              <div className="hero-label">
                <span></span>
                A SKILL COMMUNITY FOR STUDENTS
              </div>

              <h1>
                Learn skills.
                <br />

                <span>Share skills.</span>
                <br />

                Grow together.
              </h1>

              <p className="hero-description">
                SkillSwap connects students with people who can teach,
                exchange and provide the skills they need — all in one place.
              </p>

              <div className="hero-actions">

                <button className="primary-btn">
                  Explore skills
                  <span>→</span>
                </button>

                <button className="secondary-btn">
                  How it works
                </button>

              </div>

              <div className="hero-benefits">

                <span>
                  <b>✓</b>
                  Learn from peers
                </span>

                <span>
                  <b>✓</b>
                  Teach what you know
                </span>

                <span>
                  <b>✓</b>
                  Exchange skills
                </span>

              </div>

            </div>


            {/* RIGHT PRODUCT PREVIEW */}

            <div className="hero-preview">

              <div className="dashboard-card">

                {/* Dashboard Header */}

                <div className="dashboard-header">

                  <strong>SkillSwap</strong>

                  <div className="student-profile">
                    <span className="profile-circle"></span>
                    Student
                    <span className="profile-arrow">⌄</span>
                  </div>

                </div>


                {/* Dashboard Content */}

                <div className="dashboard-content">

                  <h3>
                    What do you want to learn?
                  </h3>

                  <div className="search-box">

                    <span className="search-icon">
                      ⌕
                    </span>

                    <span>
                      Search for a skill, topic or person...
                    </span>

                  </div>


                  <div className="category-header">

                    <strong>
                      Popular categories
                    </strong>

                    <button>
                      View all
                    </button>

                  </div>


                  <div className="dashboard-skills">

                    {skills.slice(0, 4).map((skill) => (

                      <div
                        className="dashboard-skill"
                        key={skill.name}
                      >

                        <div
                          className={`dashboard-icon ${skill.style}`}
                        >
                          {skill.icon}
                        </div>

                        <div>
                          <strong>
                            {skill.name}
                          </strong>

                          <span>
                            {skill.description}
                          </span>
                        </div>

                      </div>

                    ))}

                  </div>


                  {/* Skill Credits */}

                  <div className="credit-card">

                    <div className="credit-icon">
                      ↔
                    </div>

                    <div className="credit-text">

                      <span>
                        SKILL CREDITS
                      </span>

                      <strong>
                        Learn by exchanging
                      </strong>

                    </div>

                    <div className="credit-arrow">
                      →
                    </div>

                  </div>

                </div>

              </div>


              {/* Floating Cards */}

              <div className="floating-card teach-card">

                <div className="floating-icon purple">
                  +
                </div>

                <div>
                  <strong>
                    Teach a skill
                  </strong>

                  <span>
                    Share your knowledge
                  </span>
                </div>

              </div>


              <div className="floating-card exchange-card">

                <div className="floating-icon teal">
                  ↔
                </div>

                <div>
                  <strong>
                    Skill Exchange
                  </strong>

                  <span>
                    Learn together
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= EXPLORE ================= */}

        <section
          className="explore-section"
          id="explore"
        >

          <div className="section-container">

            <div className="explore-heading">

              <div>

                <span className="section-label">
                  EXPLORE
                </span>

                <h2>
                  Start with a skill.
                </h2>

              </div>

              <p>
                From coding to design, discover skills you can learn,
                teach or exchange with your community.
              </p>

            </div>


            <div className="skills-grid">

              {skills.map((skill) => (

                <button
                  className="skill-card"
                  key={skill.name}
                >

                  <div
                    className={`skill-icon ${skill.style}`}
                  >
                    {skill.icon}
                  </div>

                  <div className="skill-info">

                    <strong>
                      {skill.name}
                    </strong>

                    <span>
                      {skill.description}
                    </span>

                  </div>

                  <span className="skill-arrow">
                    →
                  </span>

                </button>

              ))}

            </div>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          className="works-section"
          id="how-it-works"
        >

          <div className="section-container works-container">

            <div className="works-intro">

              <span className="section-label">
                HOW IT WORKS
              </span>

              <h2>
                A simpler way to
                <br />
                <span>grow your skills.</span>
              </h2>

              <p>
                SkillSwap brings learning, teaching and skill exchange
                together in one student-focused platform.
              </p>

            </div>


            <div className="feature-list">

              {features.map((feature) => (

                <div
                  className="feature-row"
                  key={feature.number}
                >

                  <span className="feature-number">
                    {feature.number}
                  </span>

                  <div className="feature-main">

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.description}
                    </p>

                  </div>

                  <span className="feature-arrow">
                    ↗
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section
          className="cta-section"
          id="community"
        >

          <div className="cta-card">

            <div className="cta-content">

              <span className="section-label">
                SKILLS ARE MEANT TO BE SHARED
              </span>

              <h2>
                Have a skill?
                <br />
                <span>Someone is looking for it.</span>
              </h2>

              <p>
                Join SkillSwap to learn from others, share your knowledge
                and build your skills through real connections.
              </p>

            </div>


            <div className="cta-actions">

              <button className="primary-btn">
                Get started
                <span>→</span>
              </button>

              <button className="secondary-btn">
                Start teaching
              </button>

            </div>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="footer">

          <div className="footer-container">

            <div className="footer-brand">

              <a href="#" className="footer-logo">
                SkillSwap
              </a>

              <p>
                A student-first ecosystem for learning,
                teaching, exchanging and proving skills.
              </p>

            </div>


            <div className="footer-column">

              <h4>
                Platform
              </h4>

              <a href="#explore">
                Explore skills
              </a>

              <a href="#how-it-works">
                How it works
              </a>

              <a href="#">
                Services
              </a>

            </div>


            <div className="footer-column">

              <h4>
                Community
              </h4>

              <a href="#">
                Students
              </a>

              <a href="#">
                Resource Persons
              </a>

              <a href="#">
                Skill Credits
              </a>

            </div>


            <div className="footer-column">

              <h4>
                Company
              </h4>

              <a href="#">
                About
              </a>

              <a href="#">
                Contact
              </a>

              <a href="#">
                Help
              </a>

            </div>

          </div>


          <div className="footer-bottom">

            <span>
              © 2026 SkillSwap
            </span>

            <div>
              <a href="#">
                Privacy
              </a>

              <a href="#">
                Terms
              </a>
            </div>

          </div>

        </footer>

      </main>

    </div>
  );
}

export default App;