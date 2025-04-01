import { FC } from 'react';
import { IProps } from './AnimatedDecorativeBottleTabletImages.types';
import AnimatedDecorativeBottleTabletBottleImg from '@AnimatedComponents/AnimatedDecorativeBottleTabletBottleImg';

const AnimatedDecorativeBottleTabletImages: FC<IProps> = ({
  bottleImgs,
  activeIndex,
}) => {
  return bottleImgs.map((img, index) => {
    const key = `bottle-tablet-${index}`;
    const isPositionAbsolute = index !== 0;

    return (
      <AnimatedDecorativeBottleTabletBottleImg
        key={key}
        img={img}
        index={index}
        isPositionAbsolute={isPositionAbsolute}
        activeIndex={activeIndex}
      />
    );
  });
};

export default AnimatedDecorativeBottleTabletImages;
