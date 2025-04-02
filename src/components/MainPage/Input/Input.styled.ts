import styled from '@emotion/styled';
import { IStyledInputProps, IStyledContainerProps } from './Input.types';

export const Container = styled.div<IStyledContainerProps>`
  position: relative;

  & > svg {
    position: absolute;
    top: 50%;
    right: 0;
    width: 19px;
    height: 19px;
    transform: translateY(-50%);
    opacity: ${({ isInvalidField }) => (isInvalidField ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;

export const StyledInput = styled.input<IStyledInputProps>`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: ${({ isInvalidField, theme: { colors } }) =>
    isInvalidField ? colors.error : colors.black};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  outline: none;
  transition: border-bottom-color
    ${({ theme }) => theme.transitionDurationAndFunc};

  &::placeholder {
    color: ${({ isInvalidField, theme: { colors } }) =>
      isInvalidField ? colors.error : colors.primary};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
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
