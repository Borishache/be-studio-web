import React from 'react';
import Button from '../components/Button';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact section-padding" id="contacto">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>¿Listo para <span className="text-gradient">conectar?</span></h2>
          <p>Déjanos un mensaje o presiona el botón de WhatsApp para charlar directamente y descubrir cómo podemos hacer crecer tu negocio.</p>
        </div>
        <div className="contact-form glass-panel">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows="4" placeholder="¿En qué te podemos ayudar?"></textarea>
            </div>
            <Button variant="primary" className="w-full">Enviar Mensaje</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
