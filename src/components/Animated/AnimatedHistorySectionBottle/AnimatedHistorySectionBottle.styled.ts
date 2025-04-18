import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 801px;
  right: calc(50% + 3px);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Element = styled(motion.div)`
  position: relative;
`;

export const ShadowImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 90px);
  max-width: none;
  height: 100%;
  transform: translateX(-50%) translateY(-50%);
`;

export const Bottle = styled.img`
  position: relative;
  width: 150px;
  max-width: 150px;
`;
