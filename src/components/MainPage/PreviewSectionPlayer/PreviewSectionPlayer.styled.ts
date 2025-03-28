import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import { IPlayBtnProps } from './PreviewSectionPlayer.types';

export const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1};
  display: flex;
  height: 667px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${({ theme }) => theme.spacing(26)}px;
  padding-left: ${({ theme }) => theme.spacing(10)}px;
  padding-right: ${({ theme }) => theme.spacing(9)}px;
  padding-bottom: ${({ theme }) => theme.spacing(24)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 461px;
    height: 864px;
    padding-top: ${({ theme }) => theme.spacing(34)}px;
    padding-left: ${({ theme }) => theme.spacing(15)}px;
    padding-right: ${({ theme }) => theme.spacing(14)}px;
    padding-bottom: ${({ theme }) => theme.spacing(33)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 614px;
    height: 1151px;
    padding-top: ${({ theme }) => theme.spacing(48)}px;
    padding-left: ${({ theme }) => theme.spacing(22)}px;
    padding-right: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(45)}px;
  }
`;

export const VideoBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const StyledReactPlayer = styled(ReactPlayer)``;

export const PlayBtn = styled.button<IPlayBtnProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0;
  background-color: transparent;
  border: none;
  transform: translateX(-50%) translateY(-50%);
  opacity: ${({ playing }) => (playing ? 0 : 1)};
  pointer-events: ${({ playing }) => (playing ? 'none' : 'all')};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    width: 84px;
    height: 60px;
    color: #ff0000;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: 63px;
      height: 45px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 84px;
      height: 60px;
    }
  }
`;
