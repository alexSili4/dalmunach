import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 601px;
  right: calc(50% - 100px);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Bottle = styled(motion.img)`
  width: 300px;
  max-width: 300px;
`;
