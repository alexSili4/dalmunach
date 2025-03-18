import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import AboutSection from '@MainPageComponents/AboutSection';
import HistorySection from '@MainPageComponents/HistorySection';
import PreviewSection from '@MainPageComponents/PreviewSection';
import ShowBottleSection from '@MainPageComponents/ShowBottleSection';
import { BottleWrap, Container, Bottle } from './Main.styled';

const Main: FC = () => {
  return (
    <Container>
      <BottleWrap>
        <Bottle>Bottle</Bottle>
      </BottleWrap>
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <PreviewSection />
      <ShowBottleSection />
    </Container>
  );
};

export default Main;
