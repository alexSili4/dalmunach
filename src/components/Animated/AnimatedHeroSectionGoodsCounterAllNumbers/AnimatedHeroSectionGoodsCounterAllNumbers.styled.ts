import styled from '@emotion/styled';
import { IStyledNumberWrapProps } from './AnimatedHeroSectionGoodsCounterAllNumbers.types';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: inherit;
`;

export const NumberWrap = styled.div<IStyledNumberWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height}px;
`;

export const Number = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 32px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 48px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 64px;
  }
`;
