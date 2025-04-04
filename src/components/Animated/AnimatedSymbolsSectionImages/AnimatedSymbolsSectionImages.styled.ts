import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const DiagramsImgWrap = styled(motion.div)`
  position: absolute;
  top: 907px;
  right: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 1143px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const DiagramsImg = styled(motion.img)`
  width: 440px;
  height: 509px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 586px;
    height: 678px;
  }
`;

export const BookletImgWrap = styled(motion.div)`
  position: absolute;
  top: 585px;
  right: 50%;
  transform: translateX(50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 480px;
    right: calc(50% + 67px);
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 573px;
    right: calc(50% + 90px);
  }
`;

export const BookletImg = styled(motion.img)`
  width: 371px;
  max-width: 6000px;
  height: 535px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 499px;
    height: 720px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 665px;
    height: 960px;
  }
`;
