export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-title">Projects</span>
        <span className="section-count">02</span>
      </div>

      <div className="project">
        <div className="project-meta">
          <div className="project-num">01 / Featured</div>
          <div className="project-tags">
            <span className="tag">React</span>
            <span className="tag">Vite</span>
            <span className="tag">FastAPI</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Docker</span>
            <span className="tag">Supabase</span>
            <span className="tag">Render</span>
          </div>
        </div>
        <div className="project-body">
          <h3>StatStream — NBA Analytics Dashboard</h3>
          <p>Built and deployed a full-stack NBA analytics platform with React/Vite frontend and FastAPI backend, containerized with Docker Compose and deployed to Render via a one-click render.yaml Blueprint.</p>
          <p>Architected a modular REST API with FastAPI, SQLAlchemy ORM, and PostgreSQL, organizing routes, services, schemas, and auth dependencies into separate layers across 7 feature modules. Integrated Supabase Auth with JWT verification middleware, enabling secure accounts, favorite team persistence, and protected endpoints with full guest-browsing fallback.</p>
          <p>Implemented API rate limiting with slowapi and a 166-test pytest suite covering all routes.</p>
          <div className="project-links">
            <a href="https://github.com/kxm210107" target="_blank" rel="noreferrer" className="btn">View on GitHub</a>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-meta">
          <div className="project-num">02 / Hackathon</div>
          <div className="project-tags">
            <span className="tag">Python</span>
            <span className="tag">FastAPI</span>
            <span className="tag">React</span>
            <span className="tag">Vite</span>
            <span className="tag">PyTorch</span>
            <span className="tag">biosppy</span>
          </div>
        </div>
        <div className="project-body">
          <h3>HeartSync — ECG Anomaly Detection System</h3>
          <p>Built a production-ready REST API using FastAPI serving real-time beat-level ECG anomaly detection with sub-5 second response time on 30-minute recordings. Designed modular backend architecture separating model training, inference, and serving into independent components, integrating biosppy for R-peak detection and a custom beat windowing pipeline.</p>
          <p>Built an animated React/Vite frontend consuming live API data to visualize ECG waveforms with real-time anomaly highlighting; resolved stale-closure bugs via refs and direct DOM updates for smooth 1x/2x/3x playback.</p>
          <p>Submitted to Axxess Hackathon 2026.</p>
          <div className="project-links">
            <a href="https://github.com/kxm210107" target="_blank" rel="noreferrer" className="btn">View on GitHub</a>
          </div>
        </div>
      </div>

    </section>
  )
}
