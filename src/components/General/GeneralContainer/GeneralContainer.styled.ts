import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${({ theme: { containerWidth, padding } }) =>
    containerWidth.mobile + padding.container * 2}px;
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ theme: { containerWidth, padding } }) =>
      containerWidth.tablet + padding.container * 2}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ theme: { containerWidth, padding } }) =>
      containerWidth.desktop + padding.container * 2}px;
  }
`;
