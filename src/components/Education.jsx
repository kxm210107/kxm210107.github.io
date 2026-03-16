export default function Education() {
  return (
    <section id="education">
      <div className="section-header">
        <span className="section-title">Education</span>
        <span className="section-count">04</span>
      </div>

      <div className="exp-item">
        <div className="exp-left">
          <div className="exp-company">UT Dallas</div>
          <div className="exp-date">Sep 2022 – Dec 2026<br />GPA: 3.0 / 4.0</div>
        </div>
        <div className="exp-right">
          <div className="exp-role-title">B.S. Business Analytics &amp; Artificial Intelligence</div>
          <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '1rem' }}>Focus in Data Science</p>
          <ul className="exp-list">
            <li>Data Structures &amp; Algorithm Analysis</li>
            <li>Computer Architecture</li>
            <li>Statistics</li>
            <li>Database Fundamentals</li>
            <li>Calculus I–II</li>
            <li>Linear Algebra</li>
          </ul>
        </div>
      </div>

      <div className="exp-item">
        <div className="exp-left">
          <div className="exp-company">Collin College</div>
          <div className="exp-date">Jan 2025 – May 2025<br />GPA: 3.4 / 4.0</div>
        </div>
        <div className="exp-right">
          <div className="exp-role-title">A.A. Business</div>
        </div>
      </div>

      <div className="exp-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
        <div className="exp-left">
          <div className="exp-company">Certifications &amp; Languages</div>
        </div>
        <div className="exp-right">
          <ul className="exp-list">
            <li>AWS Cloud Practitioner (In Progress)</li>
            <li>Google Analytics (In Progress)</li>
            <li>Fluent in Vietnamese</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
