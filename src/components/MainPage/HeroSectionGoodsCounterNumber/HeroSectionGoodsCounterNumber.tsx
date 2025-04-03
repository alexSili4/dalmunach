import { FC } from 'react';
import {
  Container,
  Number,
  NumberBg,
} from './HeroSectionGoodsCounterNumber.styled';
import { IProps } from './HeroSectionGoodsCounterNumber.types';

const HeroSectionGoodsCounterNumber: FC<IProps> = ({ number }) => {
  return (
    <Container>
      <NumberBg></NumberBg>
      <Number>{number}</Number>
    </Container>
  );
};

export default HeroSectionGoodsCounterNumber;
