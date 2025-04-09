import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.span`
  display: inline-block;
  overflow-y: hidden;
`;

export const Word = styled(motion.span)`
  display: inline-block;
  white-space: pre;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;
