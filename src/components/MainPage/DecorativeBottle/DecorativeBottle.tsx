import { FC } from 'react';
import AnimatedDecorativeBottleMob from '@AnimatedComponents/AnimatedDecorativeBottleMob';
import AnimatedDecorativeBottleTablet from '@AnimatedComponents/AnimatedDecorativeBottleTablet';
import { IProps } from './DecorativeBottle.types';

const DecorativeBottle: FC<IProps> = ({
  bottleScale,
  showBottleSectionInView,
  symbolsSectionInView,
  activeIndex,
  bottleImgs,
}) => {
  const bottleMobInView = showBottleSectionInView && !symbolsSectionInView;

  return (
    <>
      <AnimatedDecorativeBottleMob
        inView={bottleMobInView}
        activeIndex={activeIndex}
        bottleImgs={bottleImgs}
      />
      <AnimatedDecorativeBottleTablet
        scale={bottleScale}
        activeIndex={activeIndex}
        inView={showBottleSectionInView}
        bottleImgs={bottleImgs}
      />
    </>
  );
};

export default DecorativeBottle;
