import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFilePdf } from "react-icons/fa";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Traditional Service Appreciation Award",
    issuer: "Xerox | lexmark Research and Development Corporation",
    date: "2026",
   pdfUrl: process.env.PUBLIC_URL + "/certificates/cert-1.pdf",
  },
  {
    id: 2,
    title: "Getting started with charts in Excel 365 (2023)",
    issuer: "Skillsoft",
    date: "2026",
    pdfUrl: process.env.PUBLIC_URL + "/certificates/cert-2.pdf",
  },
  {
    id: 3,
    title: "Using PivotTables and PivotCharts in Excel 365 (2024)",
    issuer: "Skillsoft",
    date: "2026",
   pdfUrl: process.env.PUBLIC_URL + "/certificates/cert-3.pdf",
  },
];

export default function Certifications() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % CERTIFICATIONS.length);
  };

  const prev = () => {
    setCurrent((current - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  if (!CERTIFICATIONS.length) {
    return null;
  }

  const cert = CERTIFICATIONS[current];

  return (
    <section id="certifications" className="certifications">
      <div className="section-head">
        <span className="section-head__index">04</span>
        <h2 className="section-head__title">Certifications</h2>
        <p className="section-head__desc">
          Professional certifications and credentials I've earned.
        </p>
      </div>

      <div className="carousel">
        <div className="carousel__container">
          {/* PDF Preview */}
          {/* FIXED: Added style inline to ensure the container maintains a certificate layout ratio */}
          <div className="carousel__pdf-container" style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
            <iframe
              key={cert.id}
              /* FIXED: Changed to view=Fit to scale both width and height automatically inside the iframe */
              src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              className="carousel__pdf-viewer"
              /* FIXED: Overrode default iframe styling inline to fill the container entirely */
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              title={`${cert.title} Certificate`}
            />
          </div>
          
          {/* Certificate Info */}
          <div className="carousel__info">
            <div className="carousel__info-header">
              <FaFilePdf className="carousel__info-icon" />
              <div>
                <h3 className="carousel__title">{cert.title}</h3>
                <p className="carousel__issuer">{cert.issuer}</p>
              </div>
            </div>
            <p className="carousel__date">Earned: {cert.date}</p>
          </div>

          {/* Navigation Controls */}
          <div className="carousel__controls">
            <button
              onClick={prev}
              className="carousel__btn carousel__btn--prev"
              aria-label="Previous certificate"
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="carousel__dots">
              {CERTIFICATIONS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`carousel__dot ${
                    index === current ? "carousel__dot--active" : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === current}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="carousel__btn carousel__btn--next"
              aria-label="Next certificate"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="carousel__counter">
            {current + 1} / {CERTIFICATIONS.length}
          </div>
        </div>
      </div>
    </section>
  );
}