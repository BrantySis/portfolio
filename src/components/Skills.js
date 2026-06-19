import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGit,
  FaShareAltSquare,
  FaClock,
  FaBrain,
  FaClipboard,
  FaRocket,
  FaFlask,
  FaCog,
} from "react-icons/fa";

const SKILL_ICONS = {
  HTML: <FaHtml5 className="skill-icon" />,
  CSS: <FaCss3Alt className="skill-icon" />,
  PHP: <FaPhp className="skill-icon" />,
  Laravel: <FaLaravel className="skill-icon" />,
  "Blade Templating": <FaLaravel className="skill-icon" />,
  MySQL: <FaDatabase className="skill-icon" />,
  "CRUD Operations": <FaDatabase className="skill-icon" />,
  Git: <FaGit className="skill-icon" />,
  "Power Apps": <FaCog className="skill-icon" />,
  "Power Automate": <FaFlask className="skill-icon" />,
  SharePoint: <FaShareAltSquare className="skill-icon" />,
  "Role-Based Access Control": <FaBrain className="skill-icon" />,
  Authentication: <FaRocket className="skill-icon" />,
  "Time management": <FaClock className="skill-icon" />,
  "Problem-solving": <FaBrain className="skill-icon" />,
  "Following technical specs": <FaClipboard className="skill-icon" />,
  "Fast learner": <FaRocket className="skill-icon" />,
};

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
          <div className="skills__group card-animate" key={group.label}>
            <h3 className="skills__group-label">{group.label}</h3>
            <ul className="skills__tags">
              {group.items.map((item) => (
                <li className="skills__tag skills__tag--with-icon" key={item}>
                  <span className="skills__tag-icon">
                    {SKILL_ICONS[item] || <FaRocket className="skill-icon" />}
                  </span>
                  <span className="skills__tag-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
