import React from 'react';
import Button from '../components/Button';
import './ContactSection.css';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const whatsappMsg = `*Nuevo contacto desde Web Be. Studio*%0A%0A*Nombre:* ${name}%0A*Email:* ${email}%0A*Mensaje:* ${message}`;
    const whatsappUrl = `https://wa.me/573232531798?text=${whatsappMsg}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact section-padding" id="contacto">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>¿Listo para <span className="text-gradient">conectar?</span></h2>
          <p>Déjanos un mensaje o presiona el botón de WhatsApp para charlar directamente y descubrir cómo podemos hacer crecer tu negocio.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="4" placeholder="¿En qué te podemos ayudar?" required></textarea>
            </div>
            <Button variant="primary" className="w-full">Enviar Mensaje</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
