import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledContainerProps } from './AnimatedDecorativeBottleTabletBottlePrimaryImg.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-36%) translateY(-50%);
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Bottle = styled(motion.img)`
  width: 330px;
  max-width: 1000px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 400px;
  }
`;
