export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-eyebrow">Dallas, TX {'\u00a0'}·{'\u00a0'} Open to internships</div>
      <h1>Data &amp;<br />Software<br /><span>Engineer</span></h1>
      <p className="hero-desc">
        I'm Kevin Mai — a Business Analytics &amp; AI student at UT Dallas who builds ML models,
        full-stack applications, and data pipelines.
      </p>
      <div className="hero-bottom">
        <div className="hero-links">
          <a href="mailto:kevinmai4563@gmail.com" className="btn btn-accent">Get in touch</a>
          <a href="https://github.com/kxm210107" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/kevin-k-mai" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
        </div>
        <div className="availability">
          <span className="dot"></span>
          Available for internships
        </div>
      </div>
    </div>
  )
}
