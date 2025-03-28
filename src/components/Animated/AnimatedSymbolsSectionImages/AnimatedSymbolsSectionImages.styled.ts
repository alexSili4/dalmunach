import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const DiagramsImgWrap = styled(motion.div)`
  position: absolute;
  top: 707px;
  right: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 943px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const DiagramsImg = styled.img`
  width: 440px;
  height: 509px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 586px;
    height: 678px;
  }
`;

export const BookletImgWrap = styled(motion.div)`
  position: absolute;
  top: 385px;
  left: calc(50% - 215px);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 280px;
    left: 118px;
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 373px;
    left: 157px;
  }
`;

export const BookletImg = styled.img`
  width: 428px;
  max-width: 6000px;
  height: 617px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 571px;
    height: 824px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 762px;
    height: 1099px;
  }
`;
