import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Title = styled(motion.h1)`
  width: 205px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 486px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 647px;
  }
`;

export const Word = styled.span`
  display: inline-block;
  overflow-y: hidden;
`;

export const SymbolContainer = styled.span``;

export const Symbol = styled(motion.span)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 48px;
  font-weight: 700;
  line-height: 0.84;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 114px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 152px;
  }
`;
