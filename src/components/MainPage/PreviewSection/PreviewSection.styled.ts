import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/preview/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/preview/section-bg-tablet-min.jpg';
import sectionBgDesk from '@/images/main/preview/section-bg-desk-min.jpg';
import { animations } from '@/constants';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(150)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

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

export const DeliciousImg = styled.img`
  position: absolute;
  top: 123px;
  left: 0;
  width: 176px;
  height: 327px;
  animation: ${animations.montyPythonLiteReverse} 7s steps(1) infinite;

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
  animation: ${animations.montyPythonLite} 6s steps(1) infinite;

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
