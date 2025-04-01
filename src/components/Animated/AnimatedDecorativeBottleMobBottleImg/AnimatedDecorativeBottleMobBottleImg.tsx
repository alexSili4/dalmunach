import { FC } from 'react';
import { Bottle } from './AnimatedDecorativeBottleMobBottleImg.styled';
import { IProps } from './AnimatedDecorativeBottleMobBottleImg.types';
import { useBottleImgOpacity } from '@/hooks';

const AnimatedDecorativeBottleMobBottleImg: FC<IProps> = ({
  activeIndex,
  index,
  isPositionAbsolute,
  img,
}) => {
  const opacity = useBottleImgOpacity({ index, activeIndex });

  return (
    <Bottle
      src={img}
      alt='Пляшки'
      style={{ opacity }}
      isPositionAbsolute={isPositionAbsolute}
    />
  );
};

export default AnimatedDecorativeBottleMobBottleImg;
