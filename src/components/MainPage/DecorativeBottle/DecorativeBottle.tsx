import { FC } from 'react';
import AnimatedDecorativeBottleMob from '@AnimatedComponents/AnimatedDecorativeBottleMob';
import AnimatedDecorativeBottleTablet from '@AnimatedComponents/AnimatedDecorativeBottleTablet';
import { IProps } from './DecorativeBottle.types';

const DecorativeBottle: FC<IProps> = ({
  bottleScale,
  activeIndex,
  bottleImgs,
  showAnimation,
  onAnimationComplete,
}) => {
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
        showAnimation={showAnimation}
        bottleImgs={bottleImgs}
        onAnimationComplete={onAnimationComplete}
      />
    </>
  );
};

export default DecorativeBottle;
