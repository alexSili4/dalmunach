import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import AboutSection from '@MainPageComponents/AboutSection';
import HistorySection from '@MainPageComponents/HistorySection';
import PreviewSection from '@MainPageComponents/PreviewSection';
import ShowBottleSection from '@MainPageComponents/ShowBottleSection';
import {
  BottleWrap,
  Container,
  Bottle,
  OtherSectionsWrap,
} from './Main.styled';
import SymbolsSection from '@MainPageComponents/SymbolsSection';
import DistillerySection from '@MainPageComponents/DistillerySection';
import ReservedSection from '@MainPageComponents/ReservedSection';
import Footer from '@GeneralComponents/Footer';

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
      <OtherSectionsWrap>
        <SymbolsSection />
        <DistillerySection />
        <ReservedSection />
        <Footer />
      </OtherSectionsWrap>
    </Container>
  );
};

export default Main;
