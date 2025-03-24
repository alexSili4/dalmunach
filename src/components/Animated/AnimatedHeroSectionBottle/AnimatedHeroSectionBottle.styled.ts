import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Bottle = styled(motion.img)`
  position: absolute;
  top: 153px;
  left: calc(50% + 48px);
  width: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;
