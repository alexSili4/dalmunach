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
import AnimatedHeroSectionTitle from '@AnimatedComponents/AnimatedHeroSectionTitle';
import Ellipse from '@MainPageComponents/Ellipse';
import { IProps } from './HeroSection.types';
import { useInView } from 'framer-motion';

const HeroSection: FC<IProps> = ({ isLoaded }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerInView = useInView(containerRef, {
    margin: '-100px 0px -100px 0px',
  });
  const inView = containerInView && isLoaded;

  return (
    <Section ref={sectionRef}>
      <Ellipse isLoaded={isLoaded}></Ellipse>
      <GeneralContainer>
        <Container>
          <TextWrap ref={containerRef}>
            <AnimatedHeroSectionTitle
              text='Single Malt Scotch Whisky'
              inView={inView}
            />
            <Subtitle>Product of Scotland</Subtitle>
          </TextWrap>
          <HeroSectionGoodsCounter isLoaded={isLoaded} />
        </Container>
      </GeneralContainer>
      <GirlImg src={girl} alt='Дівчина' />
      <BirdImgWrap>
        <BirdImgBg src={birdBg} alt='Фон' />
        <BirdImg src={bird} alt='Птах' />
      </BirdImgWrap>
      <AnimatedHeroSectionBottle isLoaded={isLoaded} />
    </Section>
  );
};

export default HeroSection;
