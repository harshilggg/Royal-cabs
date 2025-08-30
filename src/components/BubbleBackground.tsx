'use client';

import { useState, useEffect } from 'react';

interface Bubble {
  id: number;
  style: React.CSSProperties;
}

const generateBubbles = (count: number): Bubble[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    style: {
      '--size': `${Math.random() * 6 + 2}vmin`,
      '--color': `hsl(var(--${['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)]}) / ${Math.random() * 0.2 + 0.1})`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 25}s`,
    } as React.CSSProperties,
  }));
};

export function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(generateBubbles(30));
  }, []);

  return (
    <div className="bubble-background" aria-hidden="true">
      {bubbles.map(bubble => (
        <span key={bubble.id} className="bubble" style={{ ...bubble.style, width: 'var(--size)', height: 'var(--size)' }}></span>
      ))}
    </div>
  );
}
