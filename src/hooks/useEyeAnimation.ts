import { RefDivObject } from '@/types/types';
import { useInView, useScroll, useTransform } from 'framer-motion';
import useIsDesk from './useIsDesk';
import { IUseEyeAnimation } from '@/types/hooks.types';
import { useRef } from 'react';

const useEyeAnimation = (sectionRef: RefDivObject): IUseEyeAnimation => {
  const isDesk = useIsDesk();
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const nextSectionMargin = isDesk ? '-1200px' : '-900px';
  const nextSectionInView = useInView(nextSectionRef, {
    margin: nextSectionMargin,
  });
  const margin = isDesk ? '0px 0px -900px 0px' : '0px 0px -600px 0px';
  const animationIView = useInView(sectionRef, {
    margin,
  });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0.1, 0.2, 1], [-40, 0, 120]);
  const inView = animationIView && !nextSectionInView;

  return { rotate, inView, nextSectionRef };
};

export default useEyeAnimation;
