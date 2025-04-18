import { FC } from 'react';
import AnimatedDecorativeBottleMob from '@AnimatedComponents/AnimatedDecorativeBottleMob';
import AnimatedDecorativeBottleTablet from '@AnimatedComponents/AnimatedDecorativeBottleTablet';
import { IProps } from './DecorativeBottle.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const DecorativeBottle: FC<IProps> = ({
  bottleScale,
  activeIndex,
  bottleImgs,
  showAnimation,
  onAnimationComplete,
  bottleWrapRef,
  nextSectionInViewWithMargin,
  nextSectionInView,
  sectionInView,
}) => {
  const shouldShowHand = showAnimation || nextSectionInView;
  const shouldShowStand = showAnimation;
  const animateMob: VariantLabels =
    showAnimation || sectionInView ? 'visible' : 'hidden';
  const animate: VariantLabels = nextSectionInViewWithMargin
    ? 'hidden'
    : 'visible';
  const transition: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const bottleVariants: Variants = {
    hidden: {
      y: '-100vh',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  const standVariants: Variants = {
    hidden: {
      y: '70vh',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <>
      <AnimatedDecorativeBottleMob
        activeIndex={activeIndex}
        bottleImgs={bottleImgs}
        onAnimationComplete={onAnimationComplete}
        animate={animateMob}
        containerVariants={containerVariants}
        bottleVariants={bottleVariants}
        standVariants={standVariants}
      />
      <AnimatedDecorativeBottleTablet
        scale={bottleScale}
        activeIndex={activeIndex}
        bottleImgs={bottleImgs}
        onAnimationComplete={onAnimationComplete}
        bottleWrapRef={bottleWrapRef}
        shouldShowStand={shouldShowStand}
        shouldShowHand={shouldShowHand}
        animate={animate}
        containerVariants={containerVariants}
        elementVariants={bottleVariants}
        transition={transition}
      />
    </>
  );
};

export default DecorativeBottle;
