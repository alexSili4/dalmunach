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
  left: 50%;
`;

export const HandImg = styled(motion.img)`
  position: absolute;
  top: -164px;
  left: -146px;
  max-width: 2000px;
  height: 289px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -243px;
    left: -195px;
    height: 385px;
  }
`;

export const StandImg = styled(motion.img)`
  position: absolute;
  left: -227px;
  bottom: -187px;
  max-width: 2000px;
  width: 646px;
  height: 363px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: -250px;
    left: -303px;
    width: 861px;
    height: 484px;
  }
`;
