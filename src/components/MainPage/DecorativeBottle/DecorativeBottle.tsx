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
  isBottleAnimation,
  nextSectionInViewWithMargin,
  nextSectionInView,
}) => {
  const shouldShowHand = showAnimation || nextSectionInView;
  const shouldShowStand = showAnimation;
  const animate: VariantLabels = nextSectionInViewWithMargin
    ? 'hidden'
    : 'visible';
  const transition: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 10,
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const elementVariants: Variants = {
    hidden: {
      y: '-70%',
      opacity: 0,
      transition,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <>
      <AnimatedDecorativeBottleMob
        showAnimation={showAnimation}
        activeIndex={activeIndex}
        bottleImgs={bottleImgs}
        onAnimationComplete={onAnimationComplete}
      />
      <AnimatedDecorativeBottleTablet
        scale={bottleScale}
        activeIndex={activeIndex}
        bottleImgs={bottleImgs}
        onAnimationComplete={onAnimationComplete}
        bottleWrapRef={bottleWrapRef}
        isBottleAnimation={isBottleAnimation}
        shouldShowStand={shouldShowStand}
        shouldShowHand={shouldShowHand}
        animate={animate}
        containerVariants={containerVariants}
        elementVariants={elementVariants}
        transition={transition}
      />
    </>
  );
};

export default DecorativeBottle;
