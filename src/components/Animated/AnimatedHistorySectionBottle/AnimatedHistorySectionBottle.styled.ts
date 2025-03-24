import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Bottle = styled(motion.img)`
  position: absolute;
  top: 787px;
  right: calc(50% - 42px);
  width: 240px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;
