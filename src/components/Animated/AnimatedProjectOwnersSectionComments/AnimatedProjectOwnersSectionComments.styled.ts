import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(108)}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing()}px;
    width: 690px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 920px;
  }
`;

export const ZamoskovnyyRuslanImg = styled.img`
  position: absolute;
  top: 374px;
  left: -4px;
  width: 253px;
  max-width: 675px;
  height: 325px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 190px;
    left: -323px;
    width: 506px;
    height: 649px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 247px;
    left: -431px;
    width: 675px;
    height: 865px;
  }
`;

export const BlyznyukPlatonImg = styled.img`
  position: absolute;
  top: 354px;
  right: 0;
  width: 200px;
  max-width: 532px;
  height: 297px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: -29px;
    left: 352px;
    width: 399px;
    height: 593px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -85px;
    left: 469px;
    width: 532px;
    height: 790px;
  }
`;
