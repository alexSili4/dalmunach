import { IUseParallax } from '@/types/hooks.types';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const useParallax = (): IUseParallax => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return { containerRef, translateY };
};

export default useParallax;
