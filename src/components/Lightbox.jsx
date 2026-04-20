import React, { useState, useEffect, useCallback } from 'react';
import './Lightbox.css';

export default function Lightbox({ images, currentIndex, onClose }) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [zoomed, setZoomed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const total = images.length;

  const goNext = useCallback(() => {
    setZoomed(false);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setZoomed(false);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  }, [onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleClose, goNext, goPrev]);

  const currentImage = images[activeIndex];

  return (
    <div className={`lightbox-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="lightbox-close" onClick={handleClose} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Navigation arrows */}
        {total > 1 && (
          <>
            <button className="lightbox-arrow lightbox-prev" onClick={goPrev} aria-label="Anterior">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="lightbox-arrow lightbox-next" onClick={goNext} aria-label="Siguiente">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </>
        )}

        {/* Image */}
        <div className={`lightbox-image-wrapper ${zoomed ? 'zoomed' : ''}`}>
          <img
            src={currentImage.src}
            alt={currentImage.alt || ''}
            className="lightbox-image"
            onClick={() => setZoomed(!zoomed)}
            draggable={false}
          />
        </div>

        {/* Caption + counter */}
        <div className="lightbox-footer">
          {currentImage.alt && <span className="lightbox-caption">{currentImage.alt}</span>}
          {total > 1 && (
            <span className="lightbox-counter">{activeIndex + 1} / {total}</span>
          )}
        </div>
      </div>
    </div>
  );
}
