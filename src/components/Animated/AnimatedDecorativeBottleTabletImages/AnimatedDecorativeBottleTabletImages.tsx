import { FC } from 'react';
import { IProps } from './AnimatedDecorativeBottleTabletImages.types';
import AnimatedDecorativeBottleTabletBottleImg from '@AnimatedComponents/AnimatedDecorativeBottleTabletBottleImg';
import primaryBottle from '@/images/main/bottle/primary-bottle-min.png';

const AnimatedDecorativeBottleTabletImages: FC<IProps> = ({
  bottleImgs,
  activeIndex,
  isBottleAnimation,
}) => {
  return bottleImgs.map((img, index) => {
    const key = `bottle-tablet-${index}`;
    const isPositionAbsolute = index !== 0;
    const isFirstImg = index === 0;

    const targetFirstImg = isFirstImg ? primaryBottle : img;
    const targetImg = isBottleAnimation ? img : targetFirstImg;

    return (
      <AnimatedDecorativeBottleTabletBottleImg
        key={key}
        img={targetImg}
        index={index}
        isPositionAbsolute={isPositionAbsolute}
        activeIndex={activeIndex}
        isBottleAnimation={isBottleAnimation}
      />
    );
  });
};

export default AnimatedDecorativeBottleTabletImages;
