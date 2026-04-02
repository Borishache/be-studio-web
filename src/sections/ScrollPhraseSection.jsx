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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // How many pixels past the center of the viewport
      let delta = viewportCenter - sectionCenter;
      
      if (delta < 0) delta = 0; // Don't explode before reaching center
      
      // Math to normalize explosion impact
      const explosionAmount = Math.min(Math.max(delta / 300, 0), 1.5);
      setProgress(explosionAmount);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
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
              transform: `translate(${w.vx * progress}px, ${w.vy * progress}px) rotate(${w.r * progress}deg)`,
              opacity: 1 - (progress * 0.4) // Gradually fades
            }}
          >
            {w.text}
          </span>
        ))}
      </div>
    </section>
  );
}
