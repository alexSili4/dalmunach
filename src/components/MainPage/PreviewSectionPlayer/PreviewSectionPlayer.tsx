import { FC } from 'react';
import frame from '@/images/main/preview/frame-min.png';
import { IProps } from './PreviewSectionPlayer.types';
import {
  Container,
  StyledReactPlayer,
  VideoWrapBg,
  VideoBg,
} from './PreviewSectionPlayer.styled';
import Play from '@/icons/preview/play.svg?react';
import videoBg from '@/images/main/preview/video-bg-min.jpg';

const PreviewSectionPlayer: FC<IProps> = ({ video, previewRef }) => {
  return (
    <Container ref={previewRef}>
      <VideoBg src={videoBg} />
      <StyledReactPlayer
        url={video}
        playIcon={<Play />}
        volume={1}
        width='100%'
        height='100%'
        playsinline
        controls
        light
        playing
      />
      <VideoWrapBg src={frame} alt='Фон' />
    </Container>
  );
};

export default PreviewSectionPlayer;
