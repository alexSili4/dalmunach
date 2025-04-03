import { FC } from 'react';
import { IProps } from './HeroSectionGoodsCounterTotal.types';
import {
  Container,
  Content,
  Title,
  DecorativeElement,
} from './HeroSectionGoodsCounterTotal.styled';
import HeroSectionGoodsCounterNumber from '@MainPageComponents/HeroSectionGoodsCounterNumber';

const HeroSectionGoodsCounterTotal: FC<IProps> = ({ numbers }) => {
  return (
    <Container>
      <Title>залишилося пляшок</Title>
      <Content>
        <DecorativeElement></DecorativeElement>
        {numbers.map((number, index) => (
          <HeroSectionGoodsCounterNumber key={index} number={Number(number)} />
        ))}
      </Content>
    </Container>
  );
};

export default HeroSectionGoodsCounterTotal;
