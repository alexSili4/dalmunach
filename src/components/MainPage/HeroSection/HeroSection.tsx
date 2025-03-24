import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC, useRef } from 'react';
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
import AnimatedHeroSectionBottle from '@AnimatedComponents/AnimatedHeroSectionBottle';
import { useInView } from 'framer-motion';

const HeroSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  return (
    <Section ref={sectionRef}>
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
      <AnimatedHeroSectionBottle inView={inView} />
    </Section>
  );
};

export default HeroSection;
