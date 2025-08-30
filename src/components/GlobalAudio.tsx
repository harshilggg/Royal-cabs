'use client';

import { useEffect, useCallback } from 'react';

export function GlobalAudio() {
  const playClickSound = useCallback(() => {
    const audio = new Audio('/click.mp3');
    audio.play().catch(error => {
      // Autoplay was prevented.
      console.error("Click sound could not be played:", error);
    });
  }, []);

  useEffect(() => {
    document.addEventListener('click', playClickSound);

    return () => {
      document.removeEventListener('click', playClickSound);
    };
  }, [playClickSound]);

  return null;
}
