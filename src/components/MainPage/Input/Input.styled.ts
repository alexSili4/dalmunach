import styled from '@emotion/styled';

export const StyledInput = styled.input`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  background-color: transparent;
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  outline: none;

  &::placeholder {
    color: #222222;
  }

  &:-webkit-autofill {
    background-color: transparent !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(3)}px;
    padding-bottom: ${({ theme }) => theme.spacing(3)}px;
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(4)}px;
    padding-bottom: ${({ theme }) => theme.spacing(4)}px;
    font-size: 20px;
  }
`;
