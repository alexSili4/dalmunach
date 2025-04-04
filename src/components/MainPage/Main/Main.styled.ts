import styled from '@emotion/styled';

export const Container = styled.main`
  position: relative;
`;

export const OtherSectionsWrap = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(-177px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    transform: translateY(-237px);
  }
`;
