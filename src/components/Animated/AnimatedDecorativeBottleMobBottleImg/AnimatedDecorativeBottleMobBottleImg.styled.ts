import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledBottleProps } from './AnimatedDecorativeBottleMobBottleImg.types';

export const Bottle = styled(motion.img)<IStyledBottleProps>`
  position: ${({ isPositionAbsolute }) =>
    isPositionAbsolute ? 'absolute' : 'relative'};
  top: 0;
  left: 0;
  width: 150px;
`;
