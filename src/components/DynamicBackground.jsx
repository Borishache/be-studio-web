import React, { useState, useEffect } from 'react';
import './DynamicBackground.css';
import shape1 from '../assets/shapes/shape-1.png'; // orange
import shape2 from '../assets/shapes/shape-2.png'; // blue
import shape3 from '../assets/shapes/shape-3.png'; // white
import shape4 from '../assets/shapes/shape-4.png'; // lime

export default function DynamicBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapesData = [
    { src: shape1, top: '25%', left: '80%', speed: -0.15, size: '80px', rotate: 20 },
    { src: shape4, top: '45%', left: '10%', speed: -0.25, size: '60px', rotate: -15 },
    { src: shape2, top: '70%', left: '75%', speed: -0.1, size: '100px', rotate: 45 },
    { src: shape1, top: '90%', left: '15%', speed: -0.2, size: '70px', rotate: -30 }, 
  ];

  return (
    <div className="dyn-bg-wrapper">
      {shapesData.map((item, idx) => (
        <img 
          key={`shape-${idx}`}
          src={item.src}
          alt="decoration shape"
          className="dyn-shape"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            transform: `translateY(${scrollY * item.speed}px) rotate(${item.rotate + scrollY * 0.05}deg)`
          }}
        />
      ))}
    </div>
  );
}
