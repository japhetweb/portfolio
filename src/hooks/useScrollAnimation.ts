import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollAnimationConfig {
  offset?: [number, number];
  inputRange?: [number, number];
  outputRange?: [number, number];
}

export const useScrollAnimation = ({
  offset = [0, 1],
  inputRange = [0, 1],
  outputRange = [0, 1],
}: ScrollAnimationConfig = {}) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const element = document.documentElement;
    setClientHeight(element.clientHeight);
  }, []);

  const initial = elementTop - clientHeight * offset[0];
  const final = elementTop - clientHeight * offset[1];

  return useTransform(scrollY, [initial, final], inputRange, {
    clamp: false,
  });
};