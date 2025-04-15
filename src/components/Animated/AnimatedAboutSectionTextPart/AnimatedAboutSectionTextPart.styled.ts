import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.span`
  display: inline-block;
  overflow-y: hidden;
`;

export const Text = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;

export const Word = styled.span``;

export const Bullet = styled.img`
  position: relative;
  display: inline-block;
  height: 18px;
  transform: translateY(4px);
`;
