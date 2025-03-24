import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.bottle};
  top: 50%;
  left: 0;
  width: 100%;

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

export const BottleWrap = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 240px;
  transform: translateX(-35%) translateY(-45%);
`;

export const Bottle = styled(motion.img)`
  position: relative;
  width: 240px;
`;

export const HandImg = styled(motion.img)`
  position: absolute;
  top: -125px;
  left: -73px;
  max-width: 2000px;
  height: 209px;
`;

export const StandImg = styled(motion.img)`
  position: absolute;
  left: -115px;
  bottom: -110px;
  max-width: 2000px;
  width: 431px;
  height: 242px;
`;
