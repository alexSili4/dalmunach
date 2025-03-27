import { ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1};
  top: 0;
  left: 0;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(10)}px;
    padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(20)}px;
  }
`;

export const Nav = styled.nav``;

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > svg.${ClassNames.dalmunachHeaderIcon} {
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: 300px;
      height: 34px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 400px;
      height: 46px;
    }
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

  & > svg.${ClassNames.dinkSetterHeaderIcon} {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: 94px;
      height: 30px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 124px;
      height: 39px;
    }
  }

  & > svg.${ClassNames.scyfionHeaderIcon} {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: 94px;
      height: 24px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: 125px;
      height: 32px;
    }
  }
`;
