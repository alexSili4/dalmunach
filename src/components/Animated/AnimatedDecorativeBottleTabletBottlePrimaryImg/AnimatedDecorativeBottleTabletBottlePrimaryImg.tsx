import bottle from '@/images/main/bottle/primary-bottle-min.png';
import { FC } from 'react';
import {
  Bottle,
  Container,
} from './AnimatedDecorativeBottleTabletBottlePrimaryImg.styled';
import { IProps } from './AnimatedDecorativeBottleTabletBottlePrimaryImg.types';

const AnimatedDecorativeBottleTabletBottlePrimaryImg: FC<IProps> = ({
  inView,
}) => {
  return (
    <Container inView={inView}>
      <Bottle src={bottle} alt='Пляшки' />
    </Container>
  );
};

export default AnimatedDecorativeBottleTabletBottlePrimaryImg;
