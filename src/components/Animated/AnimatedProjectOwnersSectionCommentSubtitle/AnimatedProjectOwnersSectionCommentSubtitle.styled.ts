import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Text = styled.p`
  display: inline-block;
  overflow-y: hidden;
`;

export const Word = styled(motion.span)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  white-space: pre;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
  }
`;
