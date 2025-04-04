import { animations } from '@/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledImgProps } from './AnimatedPreviewSectionImages.types';

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DeliciousPictureWrap = styled(motion.div)`
  position: absolute;
  top: 123px;
  left: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 422px;
    left: 96px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 562px;
    left: 128px;
  }
`;

export const DeliciousPicture = styled.picture<IStyledImgProps>`
  position: relative;
  display: block;
  width: 176px;
  height: 327px;
  animation: ${animations.montyPythonLiteReverse}
    ${({ showAnimation }) => (showAnimation ? 9 : 0)}s steps(1) infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 350px;
    height: 535px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 466px;
    height: 713px;
  }
`;

export const HowGoodImgWrap = styled(motion.div)`
  position: absolute;
  top: 102px;
  right: 2px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 469px;
    right: 115px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 625px;
    right: 153px;
  }
`;

export const HowGoodImg = styled.img<IStyledImgProps>`
  position: relative;
  display: inline-block;
  width: 191px;
  height: 345px;
  animation: ${animations.montyPythonLite}
    ${({ showAnimation }) => (showAnimation ? 8 : 0)}s steps(1) infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 315px;
    height: 594px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 420px;
    height: 791px;
  }
`;
