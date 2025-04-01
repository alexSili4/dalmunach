import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Bottle = styled(motion.img)`
  position: absolute;
  top: 787px;
  right: calc(50% + 3px);
  width: 150px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;
