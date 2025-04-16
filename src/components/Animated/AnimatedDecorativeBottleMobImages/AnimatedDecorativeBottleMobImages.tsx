import { FC } from 'react';
import { IProps } from './AnimatedDecorativeBottleMobImages.types';
import AnimatedDecorativeBottleMobBottleImg from '@AnimatedComponents/AnimatedDecorativeBottleMobBottleImg';
import { Container } from './AnimatedDecorativeBottleMobImages.styled';

const AnimatedDecorativeBottleMobImages: FC<IProps> = ({
  bottleImgs,
  activeIndex,
}) => {
  return (
    <Container
    >
      {bottleImgs.map((img, index) => {
        const isPositionAbsolute = index !== 0;

        return (
          <AnimatedDecorativeBottleMobBottleImg
            key={index}
            img={img}
            isPositionAbsolute={isPositionAbsolute}
            activeIndex={activeIndex}
            index={index}
          />
        );
      })}
    </Container>
  );
};

export default AnimatedDecorativeBottleMobImages;
