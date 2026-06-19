import React from "react";

const GROUPS = [
  {
    label: "Languages & Web",
    items: ["HTML", "CSS", "PHP"],
  },
  {
    label: "Frameworks",
    items: ["Laravel", "Blade Templating"],
  },
  {
    label: "Data",
    items: ["MySQL", "CRUD Operations"],
  },
  {
    label: "Tools",
    items: ["Git", "Power Apps", "Power Automate", "SharePoint"],
  },
  {
    label: "Systems",
    items: ["Role-Based Access Control", "Authentication"],
  },
  {
    label: "Working style",
    items: [
      "Time management",
      "Problem-solving",
      "Following technical specs",
      "Fast learner",
    ],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="skills">
      <div className="section-head">
        <span className="section-head__index">02</span>
        <h2 className="section-head__title">Stack</h2>
        <p className="section-head__desc">
          What I reach for day to day, grouped by where it sits in a
          project.
        </p>
      </div>

      <div className="skills__grid">
        {GROUPS.map((group) => (
          <div className="skills__group" key={group.label}>
            <h3 className="skills__group-label">{group.label}</h3>
            <ul className="skills__tags">
              {group.items.map((item) => (
                <li className="skills__tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
