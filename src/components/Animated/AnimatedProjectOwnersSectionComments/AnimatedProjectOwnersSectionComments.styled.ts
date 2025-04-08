import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(108)}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing()}px;
    width: 690px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 920px;
  }
`;

export const ZamoskovnyyRuslanImg = styled(motion.img)`
  position: absolute;
  top: 334px;
  left: -4px;
  width: 253px;
  max-width: 675px;
  height: 325px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 110px;
    left: -323px;
    width: 506px;
    height: 649px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 147px;
    left: -431px;
    width: 675px;
    height: 865px;
  }
`;

export const BlyznyukPlatonImg = styled(motion.img)`
  position: absolute;
  top: 334px;
  right: 0;
  width: 200px;
  max-width: 532px;
  height: 297x;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: -79px;
    left: 352px;
    width: 399px;
    height: 593px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -105px;
    left: 469px;
    width: 532px;
    height: 790px;
  }
`;
