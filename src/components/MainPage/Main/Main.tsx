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

const Main: FC<IProps> = ({ isLoaded }) => {
  const [showHandAnimation, setShowHandAnimation] = useState<boolean>(false);
  const [showBottleAnimation, setShowBottleAnimation] =
    useState<boolean>(false);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionInView = useInView(aboutSectionRef, {
    margin: '-300px 0px -300px 0px',
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
        <DistillerySection />
        <ProjectOwnersSection />
        <ReservedSection />
        <Footer />
      </OtherSectionsWrap>
    </Container>
  );
};

export default Main;
