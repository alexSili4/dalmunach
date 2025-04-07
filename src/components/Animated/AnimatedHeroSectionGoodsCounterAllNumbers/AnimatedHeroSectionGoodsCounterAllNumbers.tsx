import { FC } from 'react';
import {
  Container,
  NumberWrap,
  Number,
} from './AnimatedHeroSectionGoodsCounterAllNumbers.styled';
import { getAllNumbers } from '@/utils';
import { IProps } from './AnimatedHeroSectionGoodsCounterAllNumbers.types';

const AnimatedHeroSectionGoodsCounterAllNumbers: FC<IProps> = ({
  numberHeight,
  elementVariants,
}) => {
  const isShowNumber = Boolean(numberHeight);
  const allNumbers = getAllNumbers();

  return (
    <Container variants={elementVariants}>
      <NumberWrap height={numberHeight}>
        {isShowNumber && <Number>0</Number>}
      </NumberWrap>
      {allNumbers.map((number, index) => (
        <NumberWrap key={index} height={numberHeight}>
          {isShowNumber && <Number>{number}</Number>}
        </NumberWrap>
      ))}
    </Container>
  );
};

export default AnimatedHeroSectionGoodsCounterAllNumbers;
