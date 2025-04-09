import styled from '@emotion/styled';
import { IStyledContainerProps } from './AnimatedDecorativeBottleTabletImages.types';

export const Container = styled.div<IStyledContainerProps>`
  position: relative;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;
