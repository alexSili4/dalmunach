import { FC } from 'react';
import { IProps } from './HeroSectionGoodsCounterTotal.types';
import {
  Container,
  Content,
  Title,
  DecorativeElement,
} from './HeroSectionGoodsCounterTotal.styled';
import AnimatedHeroSectionGoodsCounterNumber from '@AnimatedComponents/AnimatedHeroSectionGoodsCounterNumber';

const HeroSectionGoodsCounterTotal: FC<IProps> = ({ numbers }) => {
  return (
    <Container>
      <Title>залишилося пляшок</Title>
      <Content>
        <DecorativeElement></DecorativeElement>
        {numbers.map((number, index) => (
          <AnimatedHeroSectionGoodsCounterNumber
            key={index}
            number={Number(number)}
          />
        ))}
      </Content>
    </Container>
  );
};

export default HeroSectionGoodsCounterTotal;
