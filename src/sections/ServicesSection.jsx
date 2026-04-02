import React from 'react';
import { PenTool, Target, Zap, Layout } from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    icon: <PenTool size={36} />,
    title: 'Identidad Visual',
    description: 'Diseñamos marcas memorables que transmiten tu esencia y conectan con tu audiencia a primera vista.',
  },
  {
    icon: <Target size={36} />,
    title: 'Estrategia Digital',
    description: 'Campañas enfocadas en resultados utilizando potentes embudos de conversión y neuromarketing.',
  },
  {
    icon: <Layout size={36} />,
    title: 'Desarrollo Web',
    description: 'Plataformas rápidas, estéticas y optimizadas con la mejor UX/UI para convertir a tus visitantes.',
  },
  {
    icon: <Zap size={36} />,
    title: 'Gestión de Redes',
    description: 'Creación de contenido disruptivo para posicionarte como el líder absoluto de tu sector.',
  }
];

export default function ServicesSection() {
  return (
    <section className="services section-padding" id="servicios">
      <div className="container">
        <div className="section-header text-center">
          <h2><span className="text-orange">Nuestros</span> Servicios</h2>
          <p>Ofrecemos soluciones integrales y Premium para revolucionar tu posicionamiento digital.</p>
        </div>
        <div className="services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card glass-panel">
              <div className="service-icon text-blue">
                {svc.icon}
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
