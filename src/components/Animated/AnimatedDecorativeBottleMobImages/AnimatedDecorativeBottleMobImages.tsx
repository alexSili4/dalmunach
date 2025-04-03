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
      key='bottle-mob-wrap'
      initial={{ opacity: 0, x: '-80%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-80%' }}
      transition={{ duration: 0.8 }}
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
