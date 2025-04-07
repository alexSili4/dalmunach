import { animations } from '@/constants';
import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/distillery/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/distillery/section-bg-tablet-min.jpg';
import sectionBgDesk from '@/images/main/distillery/section-bg-desk-min.jpg';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: absolute;
  bottom: 91px;
  left: 50%;
  width: 100%;
  min-width: 618px;
  display: flex;
  transform: translateX(-50%);
`;

export const Content = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing(22)}px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
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
  bottom: 55%;
  width: 8.65%;
  aspect-ratio: 1 / 1;
  animation: ${animations.barrelLidRotate} 12s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    right: 3.3%;
    bottom: 46.5%;
  }
`;

export const CutElement = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  background-image: url(${sectionBgMob});
  background-size: cover;
  background-position: bottom 0 left 0;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 32px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 44px;
    background-image: url(${sectionBgDesk});
  }
`;

export const CutImgMob = styled.img`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const CutImgTablet = styled.img`
  position: absolute;
  bottom: 100%;
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
  bottom: 100%;
  left: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const HouseImg = styled(motion.img)`
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 238px;
  height: 150px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 555px;
    height: 350px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 740px;
    height: 466px;
  }
`;
