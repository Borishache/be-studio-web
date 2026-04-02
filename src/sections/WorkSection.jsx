import React from 'react';
import './WorkSection.css';

const works = [
  { id: 1, title: 'Campaña Moda', category: 'Social Media', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80' },
  { id: 2, title: 'App Fintech', category: 'UX/UI Design', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80' },
  { id: 3, title: 'Rebranding Café', category: 'Identidad Visual', img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80' },
  { id: 4, title: 'Lanzamiento Tech', category: 'Estrategia Digital', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80' }
];

export default function WorkSection() {
  return (
    <section className="work section-padding" id="trabajos">
      <div className="container">
        <div className="section-header text-center">
          <h2><span className="text-orange">Nuestros</span> Trabajos</h2>
          <p>Explora algunos de los proyectos más recientes donde llevamos marcas al próximo nivel.</p>
        </div>
        <div className="work-grid">
          {works.map((work) => (
            <div key={work.id} className="work-card">
              <img src={work.img} alt={work.title} className="work-img" loading="lazy" />
              <div className="work-overlay">
                <span className="work-category">{work.category}</span>
                <h3 className="work-title">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
