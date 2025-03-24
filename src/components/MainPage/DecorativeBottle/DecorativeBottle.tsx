import { FC } from 'react';
import AnimatedDecorativeBottleTablet from '@AnimatedComponents/AnimatedDecorativeBottleTablet';
import { IProps } from './DecorativeBottle.types';

const DecorativeBottle: FC<IProps> = ({
  bottleScale,
  showBottleSectionInView,
}) => {
  return (
    <>
      <AnimatedDecorativeBottleTablet
        scale={bottleScale}
        inView={showBottleSectionInView}
      />
    </>
  );
};

export default DecorativeBottle;
