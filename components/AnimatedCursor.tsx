'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const interactiveSelector = 'a, button, input, textarea, select, [role="button"]';

export const AnimatedCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 24, mass: 0.35 });
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 24, mass: 0.35 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer) {
      return;
    }

    const moveCursor = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);
    };

    const updateHoverState = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      setIsHovering(Boolean(target?.closest(interactiveSelector)));
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);
    const pressCursor = () => setIsPressed(true);
    const releaseCursor = () => setIsPressed(false);

    window.addEventListener('pointermove', moveCursor);
    window.addEventListener('pointerover', updateHoverState);
    window.addEventListener('pointerdown', pressCursor);
    window.addEventListener('pointerup', releaseCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('pointerover', updateHoverState);
      window.removeEventListener('pointerdown', pressCursor);
      window.removeEventListener('pointerup', releaseCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-accent-alt shadow-[0_0_22px_rgba(56,189,248,0.8)] mix-blend-screen md:block"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.7 : isHovering ? 0.45 : 1,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border border-accent/70 bg-accent/5 shadow-[0_0_32px_rgba(124,92,255,0.28)] backdrop-blur-[1px] md:block"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.82 : isHovering ? 1.8 : 1,
          borderColor: isHovering ? 'rgba(56, 189, 248, 0.9)' : 'rgba(124, 92, 255, 0.7)',
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      />
    </>
  );
};

export default AnimatedCursor;
