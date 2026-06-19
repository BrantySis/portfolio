import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <span className="section-head__index">05</span>
        <h2 className="contact__title">Let's work together</h2>
        <p className="contact__desc">
          Looking for a Job or entry-level role where I can put this
          stack to work. Reach out any time.
        </p>

        <div className="contact__links">
          <a
            className="contact__link"
            href="mailto:pasardanbranter@gmail.com"
          >
            <span className="contact__link-label">Email</span>
            <span className="contact__link-value">
              pasardanbranter@gmail.com
            </span>
          </a>
          <a className="contact__link" href="tel:+639671837337">
            <span className="contact__link-label">Phone</span>
            <span className="contact__link-value">+63 967 183 7337</span>
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Rembrant Pasardan. Built with React.</p>
      </footer>
    </section>
  );
}
