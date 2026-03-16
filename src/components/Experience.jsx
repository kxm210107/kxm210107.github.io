export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-title">Experience</span>
        <span className="section-count">03</span>
      </div>

      <div className="exp-item">
        <div className="exp-left">
          <div className="exp-company">Musume Dallas</div>
          <div className="exp-date">Aug 2023 – Jan 2025</div>
        </div>
        <div className="exp-right">
          <div className="exp-role-title">Server</div>
          <ul className="exp-list">
            <li>Ranked #1 in sake sales in Q3 and Q4 2023 across the full server team.</li>
            <li>Built a training program that raised floor tip averages from 21% to 24%.</li>
            <li>Developed deep expertise in wine, sake, and Japanese whisky for guest pairings.</li>
          </ul>
        </div>
      </div>

      <div className="exp-item">
        <div className="exp-left">
          <div className="exp-company">Sushi Axiom</div>
          <div className="exp-date">Dec 2020 – Aug 2022<br />Jan 2025 – Present</div>
        </div>
        <div className="exp-right">
          <div className="exp-role-title">Bartender / Server</div>
          <ul className="exp-list">
            <li>Co-led team onboarding and designed daily side-duty rotations.</li>
            <li>Created a cocktail menu that drove a 12% increase in martini sales in month one.</li>
            <li>Managed cash accounting, staff earnings, and end-of-night financials.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
