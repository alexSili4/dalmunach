import { FC } from 'react';
import AnimatedDecorativeBottleMob from '@AnimatedComponents/AnimatedDecorativeBottleMob';
import AnimatedDecorativeBottleTablet from '@AnimatedComponents/AnimatedDecorativeBottleTablet';
import { IProps } from './DecorativeBottle.types';

const DecorativeBottle: FC<IProps> = ({
  bottleScale,
  showBottleSectionInView,
  symbolsSectionInView,
}) => {
  const bottleMobInView = showBottleSectionInView && !symbolsSectionInView;

  return (
    <>
      <AnimatedDecorativeBottleMob inView={bottleMobInView} />
      <AnimatedDecorativeBottleTablet
        scale={bottleScale}
        inView={showBottleSectionInView}
      />
    </>
  );
};

export default DecorativeBottle;
