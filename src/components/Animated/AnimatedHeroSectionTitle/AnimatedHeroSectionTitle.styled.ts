import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Title = styled(motion.h1)`
  width: 205px;
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 48px;
  font-weight: 700;
  line-height: 0.8;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 486px;
    font-size: 114px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 647px;
    font-size: 152px;
  }
`;

export const SymbolContainer = styled.span`
  display: inline-block;
  overflow-y: hidden;
`;

export const Symbol = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;
