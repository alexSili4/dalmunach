import { FC } from 'react';
import { IProps } from './HeroSectionGoodsCounterTotal.types';
import {
  Container,
  Content,
  Title,
  Number,
  NumberWrap,
  NumberBg,
  DecorativeElement,
} from './HeroSectionGoodsCounterTotal.styled';

const HeroSectionGoodsCounterTotal: FC<IProps> = ({ numbers }) => {
  return (
    <Container>
      <Title>залишилося пляшок</Title>
      <Content>
        <DecorativeElement></DecorativeElement>
        {numbers.map((number, index) => (
          <NumberWrap key={index}>
            <NumberBg></NumberBg>
            <Number>{number}</Number>
          </NumberWrap>
        ))}
      </Content>
    </Container>
  );
};

export default HeroSectionGoodsCounterTotal;
