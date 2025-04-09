import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import { Section } from './PreviewSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import preview from '@/video/preview.mp4';
import PreviewSectionPlayer from '@MainPageComponents/PreviewSectionPlayer';
import AnimatedPreviewSectionImages from '@AnimatedComponents/AnimatedPreviewSectionImages';
import { IProps } from './PreviewSection.types';

const PreviewSection: FC<IProps> = ({ previewRef }) => {
  return (
    <Section>
      <HiddenSectionTitle title='Загальна демонстрація' />
      <GeneralContainer>
        <PreviewSectionPlayer video={preview} previewRef={previewRef} />
      </GeneralContainer>
      <AnimatedPreviewSectionImages />
    </Section>
  );
};

export default PreviewSection;
