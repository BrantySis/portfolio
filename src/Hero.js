import React, { useEffect, useState } from "react";

const BOOT_LINES = [
  "checking credentials ........ ok",
  "loading stack: php, laravel, mysql ........ ok",
  "loading stack: power platform ........ ok",
  "status: available for work",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 320);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section id="home" className="hero">
      <div className="hero__grid">
        <div className="hero__main">
          <p className="hero__eyebrow">BS Information Technology · Cebu, PH</p>
          <h1 className="hero__name">
            Rembrant
            <br />
            Pasardan
          </h1>
          <p className="hero__tagline">
            I build the unglamorous parts that make systems work — backend
            logic, database structure, and the workflows that hold a
            business together.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Get in touch
            </a>
            <a href="#log" className="btn btn--ghost">
              See work log
            </a>
          </div>
        </div>

        <div className="hero__panel" role="img" aria-label="System status panel">
          <div className="hero__panel-head">
            <span className="hero__panel-dot" />
            <span className="hero__panel-dot" />
            <span className="hero__panel-dot" />
            <span className="hero__panel-title">status.log</span>
          </div>
          <div className="hero__panel-body">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <p key={i} className="hero__panel-line">
                <span className="hero__panel-prompt">&gt;</span> {line}
              </p>
            ))}
            {visibleLines < BOOT_LINES.length && (
              <span className="hero__cursor" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
