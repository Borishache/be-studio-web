import React, { useState, useEffect } from 'react';
import './Header.css';
import Button from './Button';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo-alt.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close mobile menu on scroll
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="Be. studio Logo" onError={(e)=>{e.target.onerror = null; e.target.src=logoAlt}} />
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#servicios" onClick={handleLinkClick}>Servicios</a>
          <a href="#ia-campaigns" onClick={handleLinkClick}>IA</a>
          <a href="#trabajos" onClick={handleLinkClick}>Portafolio</a>
          <a href="#contacto" onClick={handleLinkClick} className="nav-cta-mobile">
            Contáctanos
          </a>
        </nav>
        <div className="header-actions">
          <Button href="#contacto" variant="primary">Contáctanos</Button>
        </div>
        {/* Hamburger toggle */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      {/* Overlay backdrop for mobile menu */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
