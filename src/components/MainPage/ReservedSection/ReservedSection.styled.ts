import styled from '@emotion/styled';
import sectionBgDesk from '@/images/main/reserved/section-bg-desk-min.jpg';
import sectionBgTablet from '@/images/main/reserved/section-bg-tablet-min.jpg';
import sectionBgMob from '@/images/main/reserved/section-bg-mob-min.jpg';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(55)}px;
  background-image: url(${sectionBgMob});
  background-position: bottom 0 left -10px;
  background-size: calc(100% + 10px) 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-image: url(${sectionBgTablet});
    background-position: bottom 0 left -80px;
    background-size: calc(100% + 80px) 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
