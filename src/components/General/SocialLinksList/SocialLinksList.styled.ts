import styled from '@emotion/styled';
import { IStyledLinkProps, IStyledListProps } from './SocialLinksList.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
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

export const List = styled.ul<IStyledListProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: ${({ isFooter }) => !isFooter && 'none'};
  }
`;

export const ListItem = styled.li``;

export const Link = styled.a<IStyledLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  aspect-ratio: 1 / 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ isFooter }) => (isFooter ? 60 : 30)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ isFooter }) => (isFooter ? 80 : 40)}px;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
