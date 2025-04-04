import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/projectOwners/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/projectOwners/section-bg-tablet-min.jpg';
import sectionBgDesk from '@/images/main/projectOwners/section-bg-desk-min.jpg';
import commentBgMob from '@/images/main/projectOwners/comment-bg-mob-min.png';
import commentBgTablet from '@/images/main/projectOwners/comment-bg-tablet-min.png';
import commentBgDesk from '@/images/main/projectOwners/comment-bg-desk-min.png';
import quotes from '@/icons/projectOwners/quotes.svg';
import { IStyledCommentProps } from './ProjectOwnersSection.types';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(24)}px;
  padding-bottom: ${({ theme }) => theme.spacing(94)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(63)}px;
    padding-bottom: ${({ theme }) => theme.spacing(52)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(84)}px;
    padding-bottom: ${({ theme }) => theme.spacing(69)}px;
    background-image: url(${sectionBgDesk});
  }
`;

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

export const Comment = styled.div<IStyledCommentProps>`
  align-self: ${({ isFlexEnd }) => isFlexEnd && 'flex-end'};
  width: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing(16)}px ${spacing(6)}px`};
  background-image: url(${quotes}), url(${commentBgMob});
  background-position: top 24px left 24px, 0 0;
  background-size: 33px 24px, 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 443px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(7)}px ${spacing(10)}px ${spacing(15)}px ${spacing(18)}px`};
    background-image: url(${quotes}), url(${commentBgTablet});
    background-position: top 28px left 30px, 0 0;
    background-size: 25px 18px, 100% 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 590px;
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
