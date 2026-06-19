import React from "react";

const ENTRIES = [
  {
    role: "IT Intern — On-the-Job Training",
    org: "Lexmark Research and Development Corporation",
    period: "Feb 2026 – Jun 2026",
    summary:
      "Four-month internship supporting business operations through data management, process automation, and system improvement.",
    details: [
      "Worked with Power Apps, Power Automate, and SharePoint to improve workflow efficiency and data accuracy.",
      "Collaborated with cross-functional teams to identify process improvements and troubleshoot issues.",
      "Contributed to the rollout of digital solutions in a corporate environment.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="log" className="experience">
      <div className="section-head">
        <span className="section-head__index">03</span>
        <h2 className="section-head__title">Work log</h2>
        <p className="section-head__desc">
          Where I've put the stack to use so far.
        </p>
      </div>

      <div className="experience__list">
        {ENTRIES.map((entry) => (
          <article className="log-entry" key={entry.org}>
            <div className="log-entry__period">{entry.period}</div>
            <div className="log-entry__body">
              <h3 className="log-entry__role">{entry.role}</h3>
              <p className="log-entry__org">{entry.org}</p>
              <p className="log-entry__summary">{entry.summary}</p>
              <ul className="log-entry__details">
                {entry.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        <div className="log-entry log-entry--placeholder">
          <div className="log-entry__period">next</div>
          <div className="log-entry__body">
            <p className="log-entry__summary">
              Open to internships and entry-level roles in software
              development or IT operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
