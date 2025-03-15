import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import {
  Container,
  Section,
  Subtitle,
  TextWrap,
  Title,
  Ellipse,
} from './HeroSection.styled';
import HeroSectionGoodsCounter from '@MainPageComponents/HeroSectionGoodsCounter';

const HeroSection: FC = () => {
  return (
    <Section>
      <Ellipse></Ellipse>
      <GeneralContainer>
        <Container>
          <TextWrap>
            <Title>Single Malt Scotch Whisky</Title>
            <Subtitle>Product of Scotland</Subtitle>
          </TextWrap>
          <HeroSectionGoodsCounter />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
