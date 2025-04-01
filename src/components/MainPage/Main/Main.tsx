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
import { useInView, useScroll, useTransform } from 'framer-motion';
import DecorativeBottle from '@MainPageComponents/DecorativeBottle';
import { bottleImgs } from '@/constants';

const Main: FC = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionInView = useInView(aboutSectionRef, {
    margin: '-300px 0px -300px 0px',
  });
  const symbolsSectionRef = useRef<HTMLDivElement>(null);
  const symbolsSectionInView = useInView(symbolsSectionRef, {
    margin: '-300px 0px -300px 0px',
  });
  const showBottleSectionRef = useRef<HTMLDivElement>(null);
  const showBottleSectionInView = useInView(showBottleSectionRef);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: generalScrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bottleScale = useTransform(
    generalScrollYProgress,
    [0, 0.07, 0.27, 0.4, 1],
    [1, 1, 1.75, 1, 1]
  );
  const { scrollYProgress: showBottleSectionScrollYProgress } = useScroll({
    target: showBottleSectionRef,
    offset: ['start end', 'end start'],
  });
  const bottleImgsLength = bottleImgs.length;
  const decorativeBottleActiveIndex = useTransform(
    showBottleSectionScrollYProgress,
    [0, 1],
    [0, bottleImgsLength - 1],
    {
      clamp: true,
    }
  );

  return (
    <Container ref={containerRef}>
      <DecorativeBottle
        symbolsSectionInView={symbolsSectionInView}
        bottleScale={bottleScale}
        showBottleSectionInView={showBottleSectionInView}
        activeIndex={decorativeBottleActiveIndex}
        bottleImgs={bottleImgs}
      />
      <HeroSection />
      <AboutSection sectionRef={aboutSectionRef} inView={aboutSectionInView} />
      <HistorySection />
      <PreviewSection />
      <ShowBottleSection sectionRef={showBottleSectionRef} />
      <OtherSectionsWrap>
        <SymbolsSection
          sectionRef={symbolsSectionRef}
          inView={symbolsSectionInView}
        />
        <DistillerySection />
        <ReservedSection />
        <Footer />
      </OtherSectionsWrap>
    </Container>
  );
};

export default Main;
