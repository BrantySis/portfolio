import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const LINKS = [
  { id: "home", label: "home" },
  { id: "stack", label: "stack" },
  { id: "log", label: "log" },
  { id: "education", label: "education" },
  { id: "certifications", label: "certifications" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check localStorage for saved preference, default to dark mode
    const savedMode = localStorage.getItem("theme");
    const prefersDark = savedMode ? savedMode === "dark" : true;
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    
    if (newMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

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

        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg transition-all duration-300 ease-in-out bg-zinc-800 hover:bg-zinc-700 text-amber-500 dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-orange-600"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? (
              <MdLightMode size={20} />
            ) : (
              <MdDarkMode size={20} />
            )}
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
        </div>

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
