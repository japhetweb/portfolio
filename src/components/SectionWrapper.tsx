import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: targetRef as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.section
      id={id}
      ref={targetRef as React.RefObject<HTMLElement>}
      className={`${className} relative`}
      style={{
        opacity,
        scale,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;