import { FC, useState } from 'react';
import frame from '@/images/main/preview/frame-min.png';
import { IProps } from './PreviewSectionPlayer.types';
import {
  Container,
  PlayBtn,
  StyledReactPlayer,
  VideoBg,
} from './PreviewSectionPlayer.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import Play from '@/icons/preview/play.svg?react';

const PreviewSectionPlayer: FC<IProps> = ({ video }) => {
  const [playing, setPlaying] = useState<boolean>(false);

  const startPlay = () => {
    setPlaying(true);
  };

  const endPlay = () => {
    setPlaying(false);
  };

  const onEnded = () => {
    endPlay();
  };

  const onPlayBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    startPlay();
  };

  const onPause = () => {
    endPlay();
  };

  const onPlay = () => {
    startPlay();
  };

  return (
    <Container>
      <StyledReactPlayer
        url={video}
        playing={playing}
        volume={1}
        width='100%'
        height='100%'
        onEnded={onEnded}
        onPause={onPause}
        onPlay={onPlay}
        playsinline
        controls
      />
      <VideoBg src={frame} alt='Фон' />
      <PlayBtn type='button' onClick={onPlayBtnClick} playing={playing}>
        <Play />
      </PlayBtn>
    </Container>
  );
};

export default PreviewSectionPlayer;
