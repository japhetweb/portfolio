import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '-50px',
}) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <motion.div
      ref={targetRef as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={
        hasIntersected
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;