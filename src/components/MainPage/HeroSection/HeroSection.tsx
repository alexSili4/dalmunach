import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import {
  Container,
  Section,
  Subtitle,
  TextWrap,
  Title,
  Ellipse,
  GirlImg,
  BirdImgWrap,
  BirdImgBg,
  BirdImg,
} from './HeroSection.styled';
import HeroSectionGoodsCounter from '@MainPageComponents/HeroSectionGoodsCounter';
import girl from '@/images/hero/girl.png';
import birdBg from '@/images/hero/bird-bg.png';
import bird from '@/images/hero/bird.png';

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
      <GirlImg src={girl} alt='Дівчина' />
      <BirdImgWrap>
        <BirdImgBg src={birdBg} alt='Фон' />
        <BirdImg src={bird} alt='Птах' />
      </BirdImgWrap>
    </Section>
  );
};

export default HeroSection;
