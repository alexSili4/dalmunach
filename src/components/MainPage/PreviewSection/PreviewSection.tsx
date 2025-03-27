import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import {
  Section,
  VideoWrap,
  DeliciousImg,
  HowGoodImg,
  Video,
  VideoBg,
} from './PreviewSection.styled';
import delicious from '@/images/main/preview/delicious-min.png';
import howGood from '@/images/main/preview/how-good-min.png';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import preview from '@/video/preview.mp4';
import frame from '@/images/main/preview/frame-min.png';

const PreviewSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Загальна демонстрація' />
      <GeneralContainer>
        <VideoWrap>
          <Video src={preview} controls preload='auto'></Video>
          <VideoBg src={frame} alt='Фон' />
        </VideoWrap>
      </GeneralContainer>
      <DeliciousImg src={delicious} alt='Декоративне зображення' />
      <HowGoodImg src={howGood} alt='Декоративне зображення' />
    </Section>
  );
};

export default PreviewSection;
