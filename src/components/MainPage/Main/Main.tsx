import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import AboutSection from '@MainPageComponents/AboutSection';
import HistorySection from '@MainPageComponents/HistorySection';
import PreviewSection from '@MainPageComponents/PreviewSection';

const Main: FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <PreviewSection />
    </>
  );
};

export default Main;
