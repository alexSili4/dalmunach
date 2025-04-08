import { FC, useRef } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import AboutSection from '@MainPageComponents/AboutSection';
import HistorySection from '@MainPageComponents/HistorySection';
import PreviewSection from '@MainPageComponents/PreviewSection';
import ShowBottleSection from '@MainPageComponents/ShowBottleSection';
import { Container, OtherSectionsWrap } from './Main.styled';
import SymbolsSection from '@MainPageComponents/SymbolsSection';
import DistillerySection from '@MainPageComponents/DistillerySection';
import ReservedSection from '@MainPageComponents/ReservedSection';
import Footer from '@GeneralComponents/Footer';
import { useInView } from 'framer-motion';
import DecorativeBottle from '@MainPageComponents/DecorativeBottle';
import ProjectOwnersSection from '@MainPageComponents/ProjectOwnersSection';
import { IProps } from './Main.types';
import AnimatedEyeImg from '@AnimatedComponents/AnimatedEyeImg';
import { useBottleAnimation, useEyeAnimation } from '@/hooks';

const Main: FC<IProps> = ({ isLoaded }) => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionInView = useInView(aboutSectionRef, {
    margin: '-300px 0px -300px 0px',
  });
  const distillerySectionRef = useRef<HTMLDivElement>(null);
  const distillerySectionInView = useInView(distillerySectionRef, {
    margin: '-300px 0px -300px 0px',
  });

  const { inView, rotate, nextSectionRef } =
    useEyeAnimation(distillerySectionRef);
  const {
    bottleImgs,
    bottleScale,
    containerRef,
    decorativeBottleActiveIndex,
    onHandAnimationComplete,
    showBottleSectionContainerRef,
    showHandAnimation,
    updateShowHandAnimation,
  } = useBottleAnimation();

  return (
    <Container ref={containerRef}>
      {isLoaded && (
        <DecorativeBottle
          onAnimationComplete={onHandAnimationComplete}
          bottleScale={bottleScale}
          showAnimation={showHandAnimation}
          activeIndex={decorativeBottleActiveIndex}
          bottleImgs={bottleImgs}
        />
      )}
      <AnimatedEyeImg inView={inView} rotate={rotate} />
      <HeroSection isLoaded={isLoaded} />
      <AboutSection sectionRef={aboutSectionRef} inView={aboutSectionInView} />
      <HistorySection />
      <PreviewSection />
      <ShowBottleSection
        showHandAnimation={showHandAnimation}
        containerRef={showBottleSectionContainerRef}
        updateShowHandAnimation={updateShowHandAnimation}
      />
      <OtherSectionsWrap>
        <SymbolsSection />
        <DistillerySection
          sectionRef={distillerySectionRef}
          inView={distillerySectionInView}
        />
        <ProjectOwnersSection sectionRef={nextSectionRef} />
        <ReservedSection />
        <Footer />
      </OtherSectionsWrap>
    </Container>
  );
};

export default Main;
