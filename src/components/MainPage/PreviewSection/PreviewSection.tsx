import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import {
  Section,
  VideoWrap,
  DeliciousImg,
  HowGoodImg,
} from './PreviewSection.styled';
import delicious from '@/images/preview/delicious.png';
import howGood from '@/images/preview/how-good.png';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const PreviewSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Загальна демонстрація' />
      <GeneralContainer>
        <VideoWrap>{/*  */}</VideoWrap>
      </GeneralContainer>
      <DeliciousImg src={delicious} alt='Декоративне зображення' />
      <HowGoodImg src={howGood} alt='Декоративне зображення' />
    </Section>
  );
};

export default PreviewSection;
