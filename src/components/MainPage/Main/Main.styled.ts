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
