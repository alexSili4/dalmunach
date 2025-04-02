import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  padding-top: ${({ theme }) => theme.spacing(16)}px;
  padding-bottom: ${({ theme }) => theme.spacing(16)}px;

  & > svg {
    align-self: center;
    width: 65px;
    height: 8px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme: { spacing } }) =>
      `${spacing(21)}px ${spacing(35)}px`};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
  }
`;
