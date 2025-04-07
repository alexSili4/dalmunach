import { FC, useEffect, useRef, useState } from 'react';
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
import { unDisableScroll } from '@/utils';
import ProjectOwnersSection from '@MainPageComponents/ProjectOwnersSection';
import { IProps } from './Main.types';
import AnimatedEyeImg from '@AnimatedComponents/AnimatedEyeImg';
import { useIsDesk, useIsTablet } from '@/hooks';

const Main: FC<IProps> = ({ isLoaded }) => {
  const [showHandAnimation, setShowHandAnimation] = useState<boolean>(false);
  const [showBottleAnimation, setShowBottleAnimation] =
    useState<boolean>(false);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionInView = useInView(aboutSectionRef, {
    margin: '-300px 0px -300px 0px',
  });
  const distillerySectionRef = useRef<HTMLDivElement>(null);
  const distillerySectionInView = useInView(distillerySectionRef, {
    margin: '-300px 0px -300px 0px',
  });
  const isDesk = useIsDesk();
  const isTablet = useIsTablet();
  const distillerySectionMargin = isDesk
    ? '-800px 0px -300px 0px'
    : isTablet
    ? '-300px 0px -300px 0px'
    : '-700px 0px -200px 0px';
  const distillerySectionInViewWithMargin = useInView(distillerySectionRef, {
    margin: distillerySectionMargin,
  });
  const showBottleSectionContainerRef = useRef<HTMLDivElement>(null);
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
  const { scrollYProgress: showBottleSectionContainerScrollYProgress } =
    useScroll({
      target: showBottleSectionContainerRef,
      offset: ['start end', 'end start'],
    });
  const bottleImgsLength = bottleImgs.length;
  const decorativeBottleActiveIndex = useTransform(
    showBottleSectionContainerScrollYProgress,
    [0.35, 0.8],
    showBottleAnimation ? [0, bottleImgsLength - 1] : [0, 0],
    {
      clamp: true,
    }
  );
  const { scrollYProgress: distillerySectionScrollProgress } = useScroll({
    target: distillerySectionRef,
    offset: ['start end', 'end start'],
  });
  const eyeRotateInputRange = isDesk
    ? [0, 0.35, 1]
    : isTablet
    ? [0, 0.3, 1]
    : [0, 0.42, 1];
  const eyeRotateOutputRange = isDesk
    ? [-40, 0, 120]
    : isTablet
    ? [-40, 0, 120]
    : [-120, 0, 120];
  const eyeRotate = useTransform(
    distillerySectionScrollProgress,
    eyeRotateInputRange,
    eyeRotateOutputRange
  );
  const updateShowHandAnimation = (data: boolean) => {
    setShowHandAnimation(data);
  };

  const onHandAnimationComplete = () => {
    unDisableScroll();
  };

  useEffect(() => {
    if (showHandAnimation) {
      setShowBottleAnimation(true);
    } else {
      setShowBottleAnimation(false);
    }
  }, [showHandAnimation]);

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
      <AnimatedEyeImg
        inView={distillerySectionInViewWithMargin}
        rotate={eyeRotate}
      />
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
        <ProjectOwnersSection />
        <ReservedSection />
        <Footer />
      </OtherSectionsWrap>
    </Container>
  );
};

export default Main;
