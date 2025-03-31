import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Title = styled(motion.h2)`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 45px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 60px;
  }
`;

export const Word = styled.span`
  display: inline-block;
  overflow-y: hidden;
`;

export const SymbolContainer = styled.span``;

export const Symbol = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;
