import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledBottleProps } from './AnimatedDecorativeBottleTabletBottleImg.types';

export const Bottle = styled(motion.img)<IStyledBottleProps>`
  position: ${({ isPositionAbsolute }) =>
    isPositionAbsolute ? 'absolute' : 'relative'};
  top: 0;
  left: 0;
  width: 149px;
  transform: translateY(6%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 200px;
    transform: translateY(7%);
  }
`;
