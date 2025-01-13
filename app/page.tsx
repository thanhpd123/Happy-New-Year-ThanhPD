'use client';

import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import Image from 'next/image';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const particleCount = 50;
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 250);

    if (audioRef.current) {
      const playAudio = () => {
        audioRef.current?.play();
      };
      window.addEventListener('click', playAudio, { once: true });
    }

    return () => clearInterval(interval);
    window.removeEventListener('click', () => audioRef.current?.play());
  }, []);

  const handlePictureClick = () => {
    setShowGift(true);
  };

  return (
    <div>
      <audio ref={audioRef} src="/music/HPNY.mp3" />
      <h1 className="text-center flex items-center justify-center gap-2">
        <span className="emoji">🎉</span>
        <span className="new-year-text">Happy New Year!</span>
        <span className="emoji">🎆</span>
      </h1>
      <div className="pictures">
        {!showGift ? (
          <div onClick={handlePictureClick} className="picture-container">
            <Image
              src="/pictures/pic1.jpg"
              alt="Picture"
              width={200}
              height={200}
              className="picture"
              loading="lazy"
            />
            <p className="click-text">Nhấp vào đây</p>
          </div>
        ) : (
          <Image
            src="/pictures/banh.gif"
            alt="Gift"
            width={200}
            height={200}
            className="gift"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}