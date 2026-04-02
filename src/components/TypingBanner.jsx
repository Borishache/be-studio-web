import React, { useState, useEffect } from 'react';
import './TypingBanner.css';
import logoImg from '../assets/banner-logo.jpg';

const words = [
  "Social Media",
  "Branding",
  "Contenidos",
  "Ads",
  "SEO",
  "Web",
  "Estrategia",
  "Marketing"
];

export default function TypingBanner() {
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    let timeout;
    
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    const typeSpeed = isDeleting ? 40 : 100;
    const fullWord = words[wordIndex];
    
    timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentWord(fullWord.substring(0, currentWord.length + 1));
        
        if (currentWord.length === fullWord.length) {
          setIsPaused(true);
        }
      } else {
        setCurrentWord(fullWord.substring(0, currentWord.length - 1));
        
        if (currentWord === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, isPaused, wordIndex]);

  return (
    <div className="typing-banner-wrapper">
      <div className="typing-banner-content">
        <img src={logoImg} alt="be." className="typing-logo" />
        <div className="typing-text-container">
          <span className="typing-text">{currentWord}</span><span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
}
