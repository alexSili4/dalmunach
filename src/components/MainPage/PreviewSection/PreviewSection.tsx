import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import { Section, DeliciousImg, HowGoodImg } from './PreviewSection.styled';
import delicious from '@/images/main/preview/delicious-min.png';
import howGood from '@/images/main/preview/how-good-min.png';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import preview from '@/video/preview.mp4';
import PreviewSectionPlayer from '@MainPageComponents/PreviewSectionPlayer';

const PreviewSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Загальна демонстрація' />
      <GeneralContainer>
        <PreviewSectionPlayer video={preview} />
      </GeneralContainer>
      <DeliciousImg src={delicious} alt='Декоративне зображення' />
      <HowGoodImg src={howGood} alt='Декоративне зображення' />
    </Section>
  );
};

export default PreviewSection;
