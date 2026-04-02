import React, { useState, useEffect } from 'react';
import './Header.css';
import Button from './Button';

import logo from '../assets/logo.png';
import logoAlt from '../assets/logo-alt.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="Be. studio Logo" onError={(e)=>{e.target.onerror = null; e.target.src=logoAlt}} />
        </div>
        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#trabajos">Portafolio</a>
        </nav>
        <div className="header-actions">
          <Button href="#contacto" variant="primary">Contáctanos</Button>
        </div>
      </div>
    </header>
  );
}
