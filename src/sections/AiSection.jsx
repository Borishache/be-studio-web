import React, { useState } from 'react';
import './AiSection.css';
import { FaRobot, FaBullseye, FaChartLine } from 'react-icons/fa';
import Lightbox from '../components/Lightbox';

export default function AiSection() {
  const baseUrl = import.meta.env.BASE_URL;
  const images = [
    { src: `${baseUrl}ai/ai-1.jpg`, alt: 'Campañas IA 1' },
    { src: `${baseUrl}ai/ai-2.jpg`, alt: 'Campañas IA 2' },
    { src: `${baseUrl}ai/ai-3.jpg`, alt: 'Campañas IA 3' },
    { src: `${baseUrl}ai/ai-4.jpg`, alt: 'Campañas IA 4' },
    { src: `${baseUrl}ai/ai-5.jpg`, alt: 'Campañas IA 5' },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <section className="ai-section section-padding" id="ia-campaigns">
      <div className="container">
        <div className="ai-layout">
          {/* Columna de Texto */}
          <div className="ai-content scroll-reveal">
            <div className="ai-badge">NUEVA ERA</div>
            <h2 className="ai-title">Campañas 360° impulsadas por <span className="text-orange">Inteligencia Artificial</span></h2>
            <p className="ai-description">
              Revolucionamos la forma de conectar. Integramos vanguardia en IA para generar activos creativos hiperrealistas, optimización de audiencias en tiempo real y tácticas de neuromarketing avanzadas. Escala tus resultados a una velocidad y precisión nunca antes vista.
            </p>
            
            <div className="ai-features">
              <div className="ai-feature">
                <div className="ai-icon text-orange"><FaRobot /></div>
                <div>
                  <h4>Modelos Hiperrealistas</h4>
                  <p>Producción de campañas visuales de alta gama sin altos costos de estudio.</p>
                </div>
              </div>
              <div className="ai-feature">
                <div className="ai-icon text-orange"><FaBullseye /></div>
                <div>
                  <h4>Estrategia Neural</h4>
                  <p>Guiones hiperoptimizados con psicología de ventas que convierten.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Imágenes (Grilla) */}
          <div className="ai-gallery scroll-reveal">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`ai-image-wrap img-${idx + 1}`}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              >
                <img src={img.src} alt={img.alt} className="ai-image" onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/400/400?grayscale'; }} />
                <div className="ai-image-zoom-hint">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox 
          images={images} 
          currentIndex={lightboxIndex} 
          onClose={() => setLightboxOpen(false)} 
        />
      )}
    </section>
  );
}
