import styled from '@emotion/styled';
import { IStyledContainerProps } from './ProjectOwnersSectionCommentDetails.types';

export const Container = styled.div<IStyledContainerProps>`
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

export const Content = styled.div`
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

export const Text = styled.p``;
