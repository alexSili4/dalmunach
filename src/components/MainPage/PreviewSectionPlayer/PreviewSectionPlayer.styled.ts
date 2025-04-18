import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1};
  display: flex;
  height: 667px;
  aspect-ratio: 356 / 667;
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

export const VideoWrapBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const VideoBg = styled.img`
  position: absolute;
  top: 60px;
  left: 40px;
  width: calc(100% - 40px - 40px);
  height: calc(100% - 60px - 60px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 80px;
    left: 60px;
    width: calc(100% - 60px - 60px);
    height: calc(100% - 80px - 80px);
  }
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: relative;
`;
