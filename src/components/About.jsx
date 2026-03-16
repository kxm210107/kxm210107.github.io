export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="section-title">About</span>
      </div>
      <div className="about-grid">
        <div className="about-main">
          <p>I'm a junior at UT Dallas studying Business Analytics and Artificial Intelligence with a focus in Data Science.</p>
          <p>My interest in tech started with wanting to understand how data and algorithms solve real-world problems — from detecting heart anomalies to optimizing operations. Whether I'm training a neural network or wiring up a REST API, I care about building things that actually work.</p>
          <p>I'm also fluent in Vietnamese and bring a background in hospitality that's made me a better communicator and teammate.</p>
        </div>
        <div className="about-side">
          <div className="side-label">Stack</div>
          <div className="skills-list">
            <span className="skill">Python</span>
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
            <span className="skill">PyTorch</span>
            <span className="skill">FastAPI</span>
            <span className="skill">SQL</span>
            <span className="skill">NumPy</span>
            <span className="skill">Pandas</span>
            <span className="skill">Git</span>
          </div>
          <div className="side-label">Education</div>
          <div className="lang">UT Dallas — B.S. Business Analytics &amp; AI</div>
          <div className="lang" style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
            Expected Dec 2026
          </div>
        </div>
      </div>
    </section>
  )
}
