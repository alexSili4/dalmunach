import styled from '@emotion/styled';
import formBg from '@/images/main/reserved/form-bg-min.png';

export const Container = styled.div`
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
    width: 626px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(17)}px ${spacing(21)}px ${spacing(20)}px`};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 834px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(23)}px ${spacing(28)}px ${spacing(26)}px`};
  }
`;
