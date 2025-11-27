import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Guia <span className="highlight">Crescer</span> e Aprender
        </h1>

        <p className="hero-subtitle">
          Apoio pedagógico, saúde emocional e estratégias para um futuro brilhante.
        </p>

        <div className="hero-buttons">
          <button className="btn-ia">
            <i className="fas fa-bolt"></i> Pergunte para a IA
          </button>

          <button className="btn-prof">
            Conheça a Professora
          </button>
        </div>
      </div>
    </header>
  );
}
