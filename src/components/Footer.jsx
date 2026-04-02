import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo.png';
import logoAlt from '../assets/logo-alt.png';

export default function Footer() {
  return (
    <footer className="footer section-padding">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Be. studio Logo" className="footer-logo" onError={(e)=>{e.target.onerror = null; e.target.src=logoAlt}} />
          <p>Potenciando marcas con estrategias disruptivas, diseño premium y experiencias únicas. Únete al siguiente nivel del marketing.</p>
        </div>
        <div className="footer-socials">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaTiktok />
            </a>
            <a href="https://wa.me/123456789" target="_blank" rel="noreferrer" className="social-icon whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Be. studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
