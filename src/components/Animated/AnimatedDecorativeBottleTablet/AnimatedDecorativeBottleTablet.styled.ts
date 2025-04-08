import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.bottle};
  top: 50%;
  left: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const BottleWrap = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 53%;
`;

export const HandImg = styled(motion.img)`
  position: absolute;
  top: -120px;
  left: -78px;
  max-width: 2000px;
  height: 250px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -170px;
    left: -105px;
    height: 320px;
  }
`;

export const StandImg = styled(motion.img)`
  position: absolute;
  left: -190px;
  bottom: -120px;
  max-width: 2000px;
  width: 646px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: -200px;
    left: -250px;
    width: 800px;
  }
`;
