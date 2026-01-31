'use client';

import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import Image from 'next/image';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showGift, setShowGift] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handlePictureClick = () => {
    setShowGift(true);

    // Phát nhạc
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Bắn pháo hoa
    intervalRef.current = setInterval(() => {
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

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 30000);
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
            />
            <p className="click-text">Nhấp vào đây</p>
          </div>
        ) : (
          <video
            src="/pictures/dance2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="gift"
            width={200}
            height={200}
          />
        )}
      </div>
    </div>
  );
}