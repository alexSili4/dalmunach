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
import delicious from '@/images/preview/delicious.png';
import howGood from '@/images/preview/how-good.png';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import preview from '@/video/preview.mp4';
import frame from '@/images/preview/frame.png';

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
