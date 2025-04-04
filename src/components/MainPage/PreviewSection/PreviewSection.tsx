import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import { Section } from './PreviewSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import preview from '@/video/preview.mp4';
import PreviewSectionPlayer from '@MainPageComponents/PreviewSectionPlayer';
import AnimatedPreviewSectionImages from '@AnimatedComponents/AnimatedPreviewSectionImages';

const PreviewSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Загальна демонстрація' />
      <GeneralContainer>
        <PreviewSectionPlayer video={preview} />
      </GeneralContainer>
      <AnimatedPreviewSectionImages />
    </Section>
  );
};

export default PreviewSection;
