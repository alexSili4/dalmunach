import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledContainerProps } from './AnimatedProjectOwnersSectionCommentDetails.types';

export const Container = styled(motion.div)<IStyledContainerProps>`
  align-self: ${({ isFlexEnd }) => isFlexEnd && 'flex-end'};
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 443px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 590px;
  }
`;

export const Content = styled(motion.div)`
  padding: ${({ theme: { spacing } }) => `${spacing(16)}px ${spacing(6)}px`};

  & > svg {
    position: absolute;
    top: 24px;
    left: 24px;
    width: 33px;
    height: 24px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      top: 28px;
      left: 30px;
      width: 25px;
      height: 18px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      top: 40px;
      left: 40px;
      width: 33px;
      height: 24px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(7)}px ${spacing(10)}px ${spacing(15)}px ${spacing(18)}px`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(10)}px ${spacing(13)}px ${spacing(20)}px ${spacing(24)}px`};
  }
`;

export const CommentBgPicture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CommentBgImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
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
