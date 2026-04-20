import React, { useState, useEffect, useRef } from 'react';
import './SocialCounter.css';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

export default function SocialCounter() {
  const [metrics, setMetrics] = useState({ likes: 1200, followers: 8500, reach: 25400 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setMetrics({
          likes: Math.floor(1200 + scrollY * 18.4),
          followers: Math.floor(8500 + scrollY * 6.2),
          reach: Math.floor(25400 + scrollY * 145.7)
        });
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const formatNumber = (num) => {
    return num.toLocaleString('en-US'); 
  };

  return (
    <div className="social-counter-container">
      <div className="social-ui-mockup">
        
        <div className="social-header-ui">
          <div className="social-avatar"></div>
          <div className="social-user-info">
            <div className="social-name">Be. studio</div>
            <div className="social-location">Growth & Alcance Viral</div>
          </div>
        </div>

        <div className="social-body">
          <div className="metric-row highlight">
            <div className="metric-details">
              <span className="metric-value text-orange">{formatNumber(metrics.likes)}</span>
              <span className="metric-label">Interacciones Totales</span>
            </div>
            <div className="metric-icon-box">
              <FaHeart className="heart-icon icon-anim" />
            </div>
          </div>

          <div className="metric-row">
            <div className="metric-details">
              <span className="metric-value">{formatNumber(metrics.followers)}</span>
              <span className="metric-label">Seguidores Ganados</span>
            </div>
            <div className="metric-trend text-lime">
              <FaArrowUp style={{ fontSize: '0.8rem' }}/> +94%
            </div>
          </div>

          <div className="metric-row">
            <div className="metric-details">
              <span className="metric-value">{formatNumber(metrics.reach)}</span>
              <span className="metric-label">Cuentas Alcanzadas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
