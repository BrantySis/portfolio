import React from "react";

const SCHOOLS = [
  {
    program: "BS Information Technology",
    school: "University of Cebu Lapu-Lapu – Mandaue",
    period: "2023 – 2026",
    note: "A. C. Cortes Ave, Mandaue, Cebu",
  },
  {
    program: "BS Information Technology",
    school: "University of San Jose – Recoletos, Basak Campus",
    period: "2021 – 2023",
    note: "N. Bacalso Ave., Basak Pardo, Cebu City",
  },
  {
    program: "Information & Communications Technology",
    school: "Proverbs Ville Academy Foundation Inc.",
    period: "2018 – 2020",
    note: "A. Tumulak Road, Gun-ob, Lapu-Lapu City",
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-head">
        <span className="section-head__index">04</span>
        <h2 className="section-head__title">Education</h2>
        <p className="section-head__desc">The path that got me here.</p>
      </div>

      <div className="education__list">
        {SCHOOLS.map((s) => (
          <div className="edu-row" key={s.school + s.period}>
            <div className="edu-row__period">{s.period}</div>
            <div className="edu-row__body">
              <h3 className="edu-row__program">{s.program}</h3>
              <p className="edu-row__school">{s.school}</p>
              <p className="edu-row__note">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
