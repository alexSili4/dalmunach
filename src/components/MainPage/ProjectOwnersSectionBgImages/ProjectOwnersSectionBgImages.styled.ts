import styled from '@emotion/styled';

export const BgCutPicture = styled.picture`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const BgCutImg = styled.img`
  width: 100%;
`;

export const CheersImg = styled.img`
  position: absolute;
  top: 755px;
  left: 50%;
  width: 340px;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 203px;
    left: calc(50% + 123px);
    width: 660px;
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 271px;
    left: calc(50% + 165px);
    width: 880px;
  }
`;

export const EllipseLeft = styled.div`
  position: absolute;
  top: 506px;
  right: 50%;
  width: 240px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};
  opacity: 0.5;
  transform: translateX(50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 506px;
    right: 50%;
    width: 240px;
  }
`;

export const EllipseRight = styled.div``;
