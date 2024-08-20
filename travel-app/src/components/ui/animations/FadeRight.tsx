import React, { useRef, useEffect } from 'react';
import gsap, { Power3 } from 'gsap';

type AnimationProps = {
  children: React.ReactNode;
  delay?: number;
  trigger?: string;
};

const FadeRight: React.FC<AnimationProps> = ({ children, delay, trigger }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      elementRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1.2, duration: 1.2, ease: Power3.easeOut, delay: delay, scrollTrigger: trigger }
    );
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeRight;
