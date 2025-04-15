import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/price/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/price/section-bg-tablet-min.jpg';
import sectionBgDesk from '@/images/main/price/section-bg-desk-min.jpg';

export const Section = styled.section`
  background-image: url(${sectionBgMob});
  background-size: 100% auto;
  background-position: 0 0;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-image: url(${sectionBgTablet});
    padding-top: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(20)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: url(${sectionBgDesk});
    padding-top: ${({ theme }) => theme.spacing(30)}px;
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  }
`;
