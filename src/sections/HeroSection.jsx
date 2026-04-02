import React from 'react';
import Button from '../components/Button';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <h1 className="hero-title">
            Eleva tu marca al <span className="text-orange">siguiente nivel.</span>
          </h1>
          <p className="hero-subtitle delay-100">
            Somos Be. studio. Combinamos estrategias impactantes, diseño de primer nivel y la psicología del consumidor para crear resultados reales que enamoran.
          </p>
          <div className="hero-cta delay-200">
            <Button href="#servicios" variant="primary">Nuestros Servicios</Button>
            <Button href="#contacto" variant="outline" className="ml-4">Hablemos</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
