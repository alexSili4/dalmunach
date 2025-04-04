import commentBgMob from '@/images/main/projectOwners/comment-bg-mob-min.png';
import commentBgTablet from '@/images/main/projectOwners/comment-bg-tablet-min.png';
import commentBgDesk from '@/images/main/projectOwners/comment-bg-desk-min.png';
import quotes from '@/icons/projectOwners/quotes.svg';
import { IStyledCommentProps } from './AnimatedProjectOwnersSectionComments.types';
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

export const Comment = styled(motion.div)<IStyledCommentProps>`
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

export const ContentWrap = styled(motion.div)`
  padding: ${({ theme: { spacing } }) => `${spacing(16)}px ${spacing(6)}px`};
  background-image: url(${quotes}), url(${commentBgMob});
  background-position: top 24px left 24px, 0 0;
  background-size: 33px 24px, 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(7)}px ${spacing(10)}px ${spacing(15)}px ${spacing(18)}px`};
    background-image: url(${quotes}), url(${commentBgTablet});
    background-position: top 28px left 30px, 0 0;
    background-size: 25px 18px, 100% 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(10)}px ${spacing(13)}px ${spacing(20)}px ${spacing(24)}px`};
    background-image: url(${quotes}), url(${commentBgDesk});
    background-position: top 40px left 40px, 0 0;
    background-size: 33px 24px, 100% 100%;
  }
`;

export const TextWrap = styled.div`
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

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
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
