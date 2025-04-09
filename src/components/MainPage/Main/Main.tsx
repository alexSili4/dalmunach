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
import AnimatedEyeImg from '@AnimatedComponents/AnimatedEyeImg';
import { useBottleAnimation, useEyeAnimation, useLoader } from '@/hooks';

const Main: FC = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const isLoaded = useLoader(heroSectionRef);
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
    bottleWrapRef,
    previewRef,
    isBottleAnimation,
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
          bottleWrapRef={bottleWrapRef}
          isBottleAnimation={isBottleAnimation}
        />
      )}
      <AnimatedEyeImg inView={inView} rotate={rotate} />
      <HeroSection sectionRef={heroSectionRef} isLoaded={isLoaded} />
      <AboutSection sectionRef={aboutSectionRef} inView={aboutSectionInView} />
      <HistorySection />
      <PreviewSection previewRef={previewRef} />
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
