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
      '--size': `${Math.random() * 8 + 4}vmin`,
      '--color': `hsl(var(--${['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)]}) / ${Math.random() * 0.2 + 0.1})`,
      '--x': `${Math.random() * 100}%`,
      '--y': `${Math.random() * 100}%`,
      '--delay': `${Math.random() * 5}s`,
    } as React.CSSProperties,
  }));
};

export function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate bubbles only on the client-side after initial render
    setBubbles(generateBubbles(30));
  }, []);

  return (
    <div className="bubble-background" aria-hidden="true">
      {bubbles.map(bubble => (
        <span key={bubble.id} className="bubble" style={bubble.style}></span>
      ))}
    </div>
  );
}
