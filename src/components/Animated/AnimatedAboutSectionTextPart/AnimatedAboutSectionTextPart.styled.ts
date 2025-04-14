import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.span`
  display: inline-block;
  overflow-y: hidden;
`;

export const Word = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;
