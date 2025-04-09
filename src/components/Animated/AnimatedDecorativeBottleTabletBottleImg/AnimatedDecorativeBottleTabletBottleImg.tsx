import { useTransform } from 'framer-motion';
import { FC } from 'react';
import { Bottle } from './AnimatedDecorativeBottleTabletBottleImg.styled';
import { IProps } from './AnimatedDecorativeBottleTabletBottleImg.types';

const AnimatedDecorativeBottleTabletBottleImg: FC<IProps> = ({
  activeIndex,
  index,
  isPositionAbsolute,
  img,
}) => {
  const getCurrentOpacity = (value: number): number => {
    const roundValue = Math.round(value);
    const isTargetIndex = roundValue === index;
    const opacity = isTargetIndex ? 1 : 0;

    return opacity;
  };

  const opacity = useTransform(activeIndex, getCurrentOpacity);

  return (
    <Bottle
      src={img}
      alt='Пляшки'
      style={{ opacity }}
      isPositionAbsolute={isPositionAbsolute}
    />
  );
};

export default AnimatedDecorativeBottleTabletBottleImg;
