import React, { useState } from 'react';
import './WorkSection.css';
import modaImg from '../assets/work/moda.jpg';
import rebrandingImg from '../assets/work/rebranding.png';
import SocialCounter from '../components/SocialCounter';
import Lightbox from '../components/Lightbox';

const works = [
  { id: 1, title: 'Campaña Moda', category: 'Social Media', img: modaImg },
  { id: 2, title: 'Catálogo e Imagen IA', category: 'Contenido Generado IA', img: `${import.meta.env.BASE_URL}work/video-ia.mp4`, isVideo: true },
  { id: 3, title: 'Rebranding Doggery', category: 'Identidad Visual', img: rebrandingImg },
  { id: 4, title: 'Incremento en Engagement', category: 'Estrategia Digital', isSocialCounter: true }
];

export default function WorkSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Only include image-based works in the lightbox gallery
  const lightboxImages = works
    .filter(w => !w.isVideo && !w.isSocialCounter)
    .map(w => ({ src: w.img, alt: w.title }));

  const openLightbox = (work) => {
    // Find the index in the lightbox-compatible images
    const idx = lightboxImages.findIndex(img => img.alt === work.title);
    if (idx >= 0) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <section className="work section-padding" id="trabajos">
      <div className="container">
        <div className="section-header text-center scroll-reveal">
          <h2><span className="text-orange">Nuestros</span> Trabajos</h2>
          <p>Explora algunos de los proyectos más recientes donde llevamos marcas al próximo nivel.</p>
        </div>
        <div className="work-grid">
          {works.map((work) => (
            <div 
              key={work.id} 
              className="work-card scroll-reveal"
              onClick={() => !work.isSocialCounter && !work.isVideo && openLightbox(work)}
            >
              {work.isSocialCounter ? (
                <SocialCounter />
              ) : work.isVideo ? (
                <video src={work.img} className="work-img" autoPlay loop muted playsInline style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              ) : (
                <>
                  <img src={work.img} alt={work.title} className="work-img" loading="lazy" />
                  <div className="work-zoom-hint">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </>
              )}
              <div className="work-overlay">
                <span className="work-category">{work.category}</span>
                <h3 className="work-title">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox 
          images={lightboxImages} 
          currentIndex={lightboxIndex} 
          onClose={() => setLightboxOpen(false)} 
        />
      )}
    </section>
  );
}
