"use client";

import { useCallback, useEffect, useRef, useState } from 'react';

const LINES = [
  'Say goodbye to heavy bags? and hello to the Bagless Concept!',
  'One smart book, packed with everything your child needs!',
  'With our Wipe & Clean books, your child can scribble, learn, and erase easily ? again and again!',
  'No mess, no waste ? pages stay neat and fresh, just like new!',
  'Let your little one explore, learn, and shine brighter every day!',
  'LearningNest ? An integrated curriculum where learning becomes joyful, smart, and mess-free!'
];

export default function VoiceOver() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const queueRef = useRef([]);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const speakLine = useCallback((text, rate = 1) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    return utterance;
  }, []);

  const start = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('Speech Synthesis not supported on this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    setIsSpeaking(true);

    const items = LINES.map((line, idx) => {
      const u = speakLine(line, 1.02);
      u.onstart = () => setCurrentIndex(idx);
      u.onend = () => {
        if (idx === LINES.length - 1) {
          setIsSpeaking(false);
          setCurrentIndex(-1);
        }
      };
      return u;
    });

    queueRef.current = items;
    items.forEach((u, i) => {
      if (i > 0) {
        // small pause between lines
        const pause = new SpeechSynthesisUtterance(' ');
        pause.volume = 0;
        window.speechSynthesis.speak(pause);
      }
      window.speechSynthesis.speak(u);
    });
  }, [speakLine]);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setCurrentIndex(-1);
  }, []);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <button className="buttonSecondary" onClick={isSpeaking ? stop : start}>
        {isSpeaking ? 'Stop Voice-over' : 'Play Voice-over'}
      </button>
      {currentIndex >= 0 && (
        <span style={{ color: '#c6d3f0', fontSize: 12 }}>Line {currentIndex + 1} / {LINES.length}</span>
      )}
    </div>
  );
}
