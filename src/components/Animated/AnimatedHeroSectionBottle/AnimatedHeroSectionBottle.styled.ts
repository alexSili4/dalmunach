import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 153px;
  left: calc(50% + 50px);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Bottle = styled(motion.img)`
  width: 200px;
  max-width: 200px;
`;
