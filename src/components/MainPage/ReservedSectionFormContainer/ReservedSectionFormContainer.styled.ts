import styled from '@emotion/styled';
import formBg from '@/images/main/reserved/form-bg-min.png';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 375px;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(16)}px ${spacing(9)}px ${spacing(20)}px`};
  background-image: url(${formBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
    width: 750px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(17)}px ${spacing(21)}px ${spacing(20)}px`};
    transform: none !important;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 1000px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(23)}px ${spacing(28)}px ${spacing(26)}px`};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const PostCardImg = styled.img`
  align-self: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 391px;
    height: 126px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 522px;
    height: 168px;
  }
`;
