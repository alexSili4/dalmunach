import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.bottle};
  top: 50%;
  left: 0;
  width: 100%;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const StickyBottleWrap = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(-50%);
  overflow: hidden;
`;

export const BottleWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translateX(-50%) translateY(-50%);
`;

export const HandImg = styled(motion.img)`
  position: absolute;
  top: -100px;
  left: -55px;
  max-width: 2000px;
  height: 209px;
`;

export const StandImg = styled(motion.img)`
  position: absolute;
  left: -90px;
  bottom: -90px;
  max-width: 2000px;
  width: 431px;
  height: 242px;
`;
