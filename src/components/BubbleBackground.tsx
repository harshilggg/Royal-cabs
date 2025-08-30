'use client';

import { useMemo } from 'react';

// A simple component to generate a list of random properties for bubbles
const useBubbles = (count: number) => {
  return useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      style: {
        '--size': `${Math.random() * 20 + 5}vmin`,
        '--color': `hsl(var(--${['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)]}) / ${Math.random() * 0.3 + 0.1})`,
        '--x': `${Math.random() * 100}%`,
        '--delay': `${Math.random() * 25}s`,
      } as React.CSSProperties
    }));
  }, [count]);
};


export function BubbleBackground() {
  const bubbles = useBubbles(20); // Generate 20 bubbles

  return (
    <div className="bubble-background" aria-hidden="true">
      {bubbles.map(bubble => (
        <span key={bubble.id} className="bubble" style={bubble.style}></span>
      ))}
    </div>
  );
}
