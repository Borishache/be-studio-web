import React, { useRef, useState, useEffect } from 'react';
import './ScrollPhraseSection.css';

const wordsData = [
  { text: "EL", vx: -150, vy: -200, r: -30, color: 'var(--black)' },
  { text: "FUTURO", vx: -50, vy: -250, r: -15, color: 'var(--black)' },
  { text: "DEL", vx: 100, vy: -200, r: 20, color: 'var(--black)' },
  { text: "MARKETING", vx: -100, vy: -50, r: -10, color: 'var(--orange)' },
  { text: "ES", vx: 150, vy: 50, r: 25, color: 'var(--black)' },
  { text: "AHORA.", vx: 250, vy: 150, r: 40, color: 'var(--black)' }
];

export default function ScrollPhraseSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) { rafRef.current = null; return; }
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        
        let delta = viewportCenter - sectionCenter;
        if (delta < 0) delta = 0;
        
        // Capped at 1.0 to prevent words from overflowing into other sections
        const explosionAmount = Math.min(Math.max(delta / 400, 0), 1.0);
        setProgress(explosionAmount);
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

  return (
    <section ref={sectionRef} className="scroll-phrase-section">
      <div className="phrase-container">
        {wordsData.map((w, idx) => (
          <span 
            key={idx} 
            className="phrase-word"
            style={{ 
              color: w.color,
              transform: `translate(${w.vx * progress * 0.6}px, ${w.vy * progress * 0.6}px) rotate(${w.r * progress * 0.5}deg)`,
              opacity: 1 - (progress * 0.5)
            }}
          >
            {w.text}
          </span>
        ))}
      </div>
    </section>
  );
}
