import { FC } from 'react';
import { IProps } from './AnimatedDecorativeBottleTabletImages.types';
import AnimatedDecorativeBottleTabletBottleImg from '@AnimatedComponents/AnimatedDecorativeBottleTabletBottleImg';
import { Container } from './AnimatedDecorativeBottleTabletImages.styled';

const AnimatedDecorativeBottleTabletImages: FC<IProps> = ({
  bottleImgs,
  activeIndex,
  inView,
}) => {
  return (
    <Container inView={inView}>
      {bottleImgs.map((img, index) => {
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
      })}
    </Container>
  );
};

export default AnimatedDecorativeBottleTabletImages;
