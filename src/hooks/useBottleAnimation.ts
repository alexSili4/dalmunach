import { useEffect, useRef, useState } from 'react';
import { bottleImgs } from '@/constants';
import { IUseBottleAnimation } from '@/types/hooks.types';
import { unDisableScroll } from '@/utils';
import { useScroll, useTransform } from 'framer-motion';

const useBottleAnimation = (): IUseBottleAnimation => {
  const [showHandAnimation, setShowHandAnimation] = useState<boolean>(false);
  const [isBottleAnimation, setIsBottleAnimation] = useState<boolean>(false);
  const [showBottleAnimation, setShowBottleAnimation] =
    useState<boolean>(false);
  const showBottleSectionContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const bottleWrapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: showBottleSectionContainerScrollYProgress } =
    useScroll({
      target: showBottleSectionContainerRef,
      offset: ['start end', 'end start'],
    });
  const bottleImgsLength = bottleImgs.length;
  const decorativeBottleActiveIndex = useTransform(
    showBottleSectionContainerScrollYProgress,
    [0.35, 0.8],
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
    const onWindowScroll = () => {
      const bottleWrap = bottleWrapRef.current;
      const preview = previewRef.current;

      if (bottleWrap && preview) {
        const previewRect = preview.getBoundingClientRect();
        const bottleWrapRect = bottleWrap.getBoundingClientRect();

        const isBottleAnimation = previewRect.top - bottleWrapRect.top <= -30;

        setIsBottleAnimation(isBottleAnimation);
      }
    };

    window.addEventListener('scroll', onWindowScroll);
  }, []);

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
    isBottleAnimation,
  };
};

export default useBottleAnimation;
