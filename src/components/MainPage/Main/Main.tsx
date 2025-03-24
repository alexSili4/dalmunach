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

const Main: FC = () => {
  const symbolsSectionRef = useRef<HTMLDivElement>(null);
  const symbolsSectionInView = useInView(symbolsSectionRef);
  const showBottleSectionRef = useRef<HTMLDivElement>(null);
  const showBottleSectionInView = useInView(showBottleSectionRef);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bottleScale = useTransform(
    scrollYProgress,
    [0, 0.07, 0.27, 0.4, 1],
    [1, 1, 1.75, 1, 1]
  );

  return (
    <Container ref={containerRef}>
      <DecorativeBottle
        symbolsSectionInView={symbolsSectionInView}
        bottleScale={bottleScale}
        showBottleSectionInView={showBottleSectionInView}
      />
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <PreviewSection />
      <ShowBottleSection sectionRef={showBottleSectionRef} />
      <OtherSectionsWrap>
        <SymbolsSection sectionRef={symbolsSectionRef} />
        <DistillerySection />
        <ReservedSection />
        <Footer />
      </OtherSectionsWrap>
    </Container>
  );
};

export default Main;
