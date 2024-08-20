import React, { useRef, useEffect } from 'react';
import gsap, { Power3 } from 'gsap';

type AnimationProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
};

const FadeDown: React.FC<AnimationProps> = ({ children, delay }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      elementRef.current,
      { skewX: 45, y: -100, opacity: 0 },
      { skewX: 0, y: 0, opacity: 1.2, duration:.8, ease: Power3.easeOut, delay: delay }
    );
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeDown;
