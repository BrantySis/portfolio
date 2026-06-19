import React, { useState, useEffect } from "react";

const LINKS = [
  { id: "home", label: "home" },
  { id: "stack", label: "stack" },
  { id: "log", label: "log" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <button
          className="nav__brand"
          onClick={() => handleClick("home")}
          aria-label="Go to top"
        >
          <span className="nav__brand-dot" />
          rembrant.dev
        </button>

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {LINKS.map((link, i) => (
            <button
              key={link.id}
              className={`nav__link ${
                active === link.id ? "nav__link--active" : ""
              }`}
              onClick={() => handleClick(link.id)}
            >
              <span className="nav__link-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
