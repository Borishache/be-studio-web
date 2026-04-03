import React from 'react';
import './WorkSection.css';
import modaImg from '../assets/work/moda.jpg';
import rebrandingImg from '../assets/work/rebranding.png';
import SocialCounter from '../components/SocialCounter';

const works = [
  { id: 1, title: 'Campaña Moda', category: 'Social Media', img: modaImg },
  { id: 2, title: 'Catálogo e Imagen IA', category: 'Contenido Generado IA', img: `${import.meta.env.BASE_URL}work/video-ia.mp4`, isVideo: true },
  { id: 3, title: 'Rebranding Doggery', category: 'Identidad Visual', img: rebrandingImg },
  { id: 4, title: 'Incremento en Engagement', category: 'Estrategia Digital', isSocialCounter: true }
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
              {work.isSocialCounter ? (
                <SocialCounter />
              ) : work.isVideo ? (
                <video src={work.img} className="work-img" autoPlay loop muted playsInline style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              ) : (
                <img src={work.img} alt={work.title} className="work-img" loading="lazy" />
              )}
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
