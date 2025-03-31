import { animations } from '@/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SaxophonistImgWrap = styled(motion.div)`
  position: absolute;
  bottom: 86px;
  left: 116px;
  animation: ${animations.montyPythonLite} 6s steps(1) infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    bottom: 100px;
    left: 180px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: 133px;
    left: 240px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    z-index: ${({ theme }) => theme.zIndex.saxophonist};
  }
`;

export const SaxophonistImg = styled(motion.img)`
  position: relative;
  width: 137px;
  height: 220px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 282px;
    height: 454px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 376px;
    height: 605px;
  }
`;

export const SaxophonistTextImg = styled(motion.img)`
  position: absolute;
  bottom: 118px;
  left: 87px;
  width: 137px;
  height: 155px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    bottom: 233px;
    left: 183px;
    width: 282px;
    height: 320px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: 310px;
    left: 244px;
    width: 376px;
    height: 427px;
  }
`;
