import { animations } from '@/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ManImgWrap = styled(motion.div)`
  position: absolute;
  top: 787px;
  left: calc(50% - 32px);
  transform-origin: bottom right;
  animation: ${animations.man} 8s infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 569px;
    left: calc(50% + 192px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 759px;
    left: calc(50% + 256px);
  }
`;

export const ManImg = styled(motion.img)`
  width: 156px;
  height: 600px;
  transform-origin: bottom right;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 193px;
    height: 743px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 257px;
    height: 991px;
  }
`;
