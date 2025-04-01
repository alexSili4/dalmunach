import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledBottleProps } from './AnimatedDecorativeBottleTabletBottleImg.types';

export const Bottle = styled(motion.img)<IStyledBottleProps>`
  position: ${({ isPositionAbsolute }) =>
    isPositionAbsolute ? 'absolute' : 'relative'};
  top: 0;
  left: 0;
  width: 188px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 250px;
  }
`;
