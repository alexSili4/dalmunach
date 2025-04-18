import { FC } from 'react';
import { IProps } from './AnimatedDecorativeBottleMobImages.types';
import AnimatedDecorativeBottleMobBottleImg from '@AnimatedComponents/AnimatedDecorativeBottleMobBottleImg';
import {
  Container,
  ShadowImg,
} from './AnimatedDecorativeBottleMobImages.styled';
import shadow from '@/images/main/bottle/shadow.webp';

const AnimatedDecorativeBottleMobImages: FC<IProps> = ({
  bottleImgs,
  activeIndex,
}) => {
  return (
    <Container>
      <ShadowImg src={shadow} alt='Тінь' />
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
