import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.eye};
  top: 100px;
  right: 167px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    right: 223px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const Element = styled(motion.div)`
  position: relative;
`;

export const EyeImg = styled(motion.img)`
  position: relative;
  width: 417px;
  height: 158px;
  transform-origin: right center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 556px;
    height: 210px;
  }
`;
