import styled from '@emotion/styled';

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
    top: 437px;
    right: calc(50% + 480px);
    width: 480px;
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 583px;
    right: calc(50% + 640px);
    width: 640px;
  }
`;

export const EllipseRight = styled.div`
  position: absolute;
  top: 1282px;
  left: 50%;
  width: 240px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue};
  opacity: 0.5;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 581px;
    left: calc(50% + 505px);
    width: 430px;
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 774px;
    left: calc(50% + 673px);
    width: 573px;
  }
`;
