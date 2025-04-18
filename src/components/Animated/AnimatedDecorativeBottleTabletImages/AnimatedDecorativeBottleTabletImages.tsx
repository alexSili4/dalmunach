import { FC } from 'react';
import { IProps } from './AnimatedDecorativeBottleTabletImages.types';
import AnimatedDecorativeBottleTabletBottleImg from '@AnimatedComponents/AnimatedDecorativeBottleTabletBottleImg';
import {
  Container,
  ShadowImg,
} from './AnimatedDecorativeBottleTabletImages.styled';
import shadow from '@/images/main/bottle/shadow.webp';

const AnimatedDecorativeBottleTabletImages: FC<IProps> = ({
  bottleImgs,
  activeIndex,
}) => {
  return (
    <Container>
      <ShadowImg src={shadow} alt='Тінь' />
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
