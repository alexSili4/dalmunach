import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
`;

export const ShadowImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 90px);
  max-width: none;
  height: 100%;
  transform: translateX(-50%) translateY(-50%);
`;
