import { useEffect, useRef, useState } from 'react';
import { bottleImgs } from '@/constants';
import { IUseBottleAnimation } from '@/types/hooks.types';
import { unDisableScroll } from '@/utils';
import { useInView, useScroll, useTransform } from 'framer-motion';
import useIsTablet from './useIsTablet';

const useBottleAnimation = (): IUseBottleAnimation => {
  const [showHandAnimation, setShowHandAnimation] = useState<boolean>(false);
  const [showBottleAnimation, setShowBottleAnimation] =
    useState<boolean>(false);
  const isTablet = useIsTablet();
  const showBottleSectionContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const bottleWrapRef = useRef<HTMLDivElement>(null);
  const mobBottleGuardRef = useRef<HTMLDivElement>(null);
  const mobBottleGuardInView = useInView(mobBottleGuardRef);
  const { scrollYProgress: showBottleSectionContainerScrollYProgress } =
    useScroll({
      target: showBottleSectionContainerRef,
      offset: ['start end', 'end start'],
    });
  const bottleImgsLength = bottleImgs.length;
  const decorativeBottleActiveIndex = useTransform(
    showBottleSectionContainerScrollYProgress,
    isTablet ? [0.28, 0.74] : [0.47, 0.65],
    showBottleAnimation ? [0, bottleImgsLength - 1] : [0, 0],
    {
      clamp: true,
    }
  );
  const { scrollYProgress: generalScrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bottleScale = useTransform(
    generalScrollYProgress,
    [0, 0.07, 0.27, 0.4, 1],
    [1, 1, 1.75, 1, 1]
  );

  const updateShowHandAnimation = (data: boolean) => {
    setShowHandAnimation(data);
  };

  const onHandAnimationComplete = () => {
    unDisableScroll();
  };

  useEffect(() => {
    if (showHandAnimation) {
      setShowBottleAnimation(true);
    } else {
      setShowBottleAnimation(false);
    }
  }, [showHandAnimation]);

  return {
    updateShowHandAnimation,
    showBottleSectionContainerRef,
    showHandAnimation,
    bottleImgs,
    decorativeBottleActiveIndex,
    bottleScale,
    onHandAnimationComplete,
    containerRef,
    previewRef,
    bottleWrapRef,
    mobBottleGuardRef,
    mobBottleGuardInView,
  };
};

export default useBottleAnimation;
