import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import AboutSection from '@MainPageComponents/AboutSection';
import HistorySection from '@MainPageComponents/HistorySection';
import PreviewSection from '@MainPageComponents/PreviewSection';
import ShowBottleSection from '@MainPageComponents/ShowBottleSection';
import { BottleWrap, Container, Bottle } from './Main.styled';
import SymbolsSection from '@MainPageComponents/SymbolsSection';

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
      <SymbolsSection />
    </Container>
  );
};

export default Main;
