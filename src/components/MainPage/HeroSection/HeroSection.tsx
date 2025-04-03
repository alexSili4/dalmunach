import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Container,
  Section,
  Subtitle,
  TextWrap,
  GirlImg,
  BirdImgWrap,
  BirdImgBg,
  BirdImg,
} from './HeroSection.styled';
import HeroSectionGoodsCounter from '@MainPageComponents/HeroSectionGoodsCounter';
import girl from '@/images/main/hero/girl-min.png';
import birdBg from '@/images/main/hero/bird-bg-min.png';
import bird from '@/images/main/hero/bird-min.png';
import AnimatedHeroSectionBottle from '@AnimatedComponents/AnimatedHeroSectionBottle';
import { useInView } from 'framer-motion';
import AnimatedHeroSectionTitle from '@AnimatedComponents/AnimatedHeroSectionTitle';
import Ellipse from '@MainPageComponents/Ellipse';

const HeroSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, {
    margin: '-300px 0px -300px 0px',
  });

  return (
    <Section ref={sectionRef}>
      <Ellipse></Ellipse>
      <GeneralContainer>
        <Container>
          <TextWrap>
            <AnimatedHeroSectionTitle
              text='Single Malt Scotch Whisky'
              inView={inView}
            />
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
