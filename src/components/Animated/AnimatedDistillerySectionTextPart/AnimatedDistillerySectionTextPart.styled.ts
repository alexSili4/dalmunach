import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledWordProps } from './AnimatedDistillerySectionTextPart.types';

export const Container = styled.span`
  display: inline-block;
  overflow-y: hidden;
`;

export const Word = styled(motion.span)<IStyledWordProps>`
  display: inline-block;
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  white-space: pre;
  text-transform: ${({ isTitle }) => isTitle && 'uppercase'};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;
