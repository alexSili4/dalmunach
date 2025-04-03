import { animations } from '@/constants';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 176px;
  left: 50%;
  width: calc(100% + 63px + 63px);
  aspect-ratio: 1 / 1;
  background-color: #004c43;
  border-radius: 50%;
  transform: translateX(-50%);
  opacity: 0.2;
  animation: ${animations.ellipse} 2000ms;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 202px;
    width: 583px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 269px;
    width: 777;
  }
`;
