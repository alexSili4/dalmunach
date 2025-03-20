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
import girl from '@/images/main/hero/girl.png';
import birdBg from '@/images/main/hero/bird-bg.png';
import bird from '@/images/main/hero/bird.png';

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
