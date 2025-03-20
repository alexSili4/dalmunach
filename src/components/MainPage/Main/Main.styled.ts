import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
`;

export const BottleWrap = styled.div`
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.bottle};
  top: 0;
  left: 0;
`;

export const Bottle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100px;
  height: 100px;
  background-color: violet;
`;

export const OtherSectionsWrap = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    position: absolute;
    z-index: ${({ theme }) => theme.zIndex.bottle + 1};
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(-177px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    transform: translateY(-237px);
  }
`;
