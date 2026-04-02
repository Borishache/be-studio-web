import React from 'react';
import './Button.css';

export default function Button({ children, variant = 'primary', onClick, className = '', href, target }) {
  const classes = `btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
