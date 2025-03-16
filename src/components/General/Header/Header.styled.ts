import { ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.header};
  top: 0;
  left: 0;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
  }
`;

export const Nav = styled.nav``;

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(44)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(59)}px;
  }

  & > svg.${ClassNames.dalmunachIcon} {
    width: 100%;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;
