import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import { Section, VideoWrap } from './PreviewSection.styled';

const PreviewSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Загальна демонстрація' />
      <VideoWrap>{/*  */}</VideoWrap>
      <DeliciousImg src={delicious} alt='Декоративне зображення' />
      <HowGoodImg src={howGood} alt='Декоративне зображення' />
    </Section>
  );
};

export default PreviewSection;
