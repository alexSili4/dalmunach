import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/distillery/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/distillery/section-bg-tablet-min.jpg';
import sectionBgDesk from '@/images/main/distillery/section-bg-desk-min.jpg';
import { animations } from '@/constants';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(22)}px;
  padding-bottom: ${({ theme }) => theme.spacing(120)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(60)}px;
    padding-bottom: ${({ theme }) => theme.spacing(194)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(79)}px;
    padding-bottom: ${({ theme }) => theme.spacing(261)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(43)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
    width: 543px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 724px;
  }
`;

export const BottleImg = styled.img`
  position: absolute;
  top: 192px;
  left: 16px;
  width: 44px;
  height: 122px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 323px;
    left: auto;
    right: 601px;
    width: 79px;
    height: 174px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 430px;
    right: 801px;
    width: 106px;
    height: 232px;
  }
`;

export const YeyPicture = styled.picture`
  position: absolute;
  top: 192px;
  right: 14px;
  width: 302px;
  height: 114px;
  transform-origin: right center;
  animation: ${animations.scanner} 6s infinite alternate;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 347px;
    right: 167px;
    width: 444px;
    height: 261px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 462px;
    right: 223px;
    width: 592px;
    height: 347px;
  }
`;

export const SectionBgWrap = styled.div`
  position: absolute;
  bottom: 91px;
  left: 50%;
  position: absolute;
  display: flex;
  width: 100%;
  min-width: 618px;
  padding-bottom: 87px;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(11)}px;
  }
`;

export const SectionBgMob = styled.img`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const SectionBgTablet = styled.img`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const SectionBgDesk = styled.img`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const BarrelLidImg = styled.img`
  position: absolute;
  right: 18.5%;
  bottom: 53.2%;
  width: 8.65%;
  aspect-ratio: 1 / 1;
  animation: ${animations.barrelLidRotate} 12s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    right: 3.3%;
    bottom: 46%;
  }
`;

export const CutImgMob = styled.img`
  position: absolute;
  bottom: 87px;
  left: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const CutImgTablet = styled.img`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const CutImgDesk = styled.img`
  position: absolute;
  bottom: 42px;
  left: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;
