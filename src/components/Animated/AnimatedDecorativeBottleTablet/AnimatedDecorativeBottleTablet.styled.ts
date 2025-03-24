import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.bottle};
  top: 50%;
  left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const BottleWrap = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
`;

export const Bottle = styled.img`
  position: relative;
  width: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 400px;
  }
`;

export const HandImg = styled(motion.img)`
  position: absolute;
  top: -150px;
  left: -105px;
  max-width: 2000px;
  height: 280px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -216px;
    left: -150px;
    height: 385px;
  }
`;

export const StandImg = styled(motion.img)`
  position: absolute;
  left: -194px;
  bottom: -150px;
  max-width: 2000px;
  width: 646px;
  height: 363px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    bottom: -227px;
    left: -270px;
    width: 861px;
    height: 484px;
  }
`;
