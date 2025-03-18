import styled from '@emotion/styled';
import sectionBgMob from '@/images/preview/section-bg-mob.jpg';
import sectionBgTablet from '@/images/preview/section-bg-tablet.jpg';
import sectionBgDesk from '@/images/preview/section-bg-desk.jpg';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(150)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(56)}px;
    padding-bottom: ${({ theme }) => theme.spacing(35)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(75)}px;
    padding-bottom: ${({ theme }) => theme.spacing(47)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const VideoWrap = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.preview};
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
    padding-bottom: ${({ theme }) => theme.spacing(29)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 614px;
    height: 1151px;
    padding-top: ${({ theme }) => theme.spacing(48)}px;
    padding-left: ${({ theme }) => theme.spacing(22)}px;
    padding-right: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(43)}px;
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

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const DeliciousImg = styled.img`
  position: absolute;
  top: 123px;
  left: 0;
  width: 176px;
  height: 327px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 422px;
    left: 96px;
    width: 350px;
    height: 535px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 562px;
    left: 128px;
    width: 466px;
    height: 713px;
  }
`;

export const HowGoodImg = styled.img`
  position: absolute;
  top: 102px;
  right: 2px;
  width: 191px;
  height: 345px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 469px;
    right: 115px;
    width: 315px;
    height: 594px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 625px;
    right: 153px;
    width: 420px;
    height: 791px;
  }
`;
