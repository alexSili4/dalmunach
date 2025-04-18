import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const ShadowImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 90px);
  max-width: none;
  height: 100%;
  transform: translateX(-50%) translateY(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: calc(100% + 120px);
  }
`;
