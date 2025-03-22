import styled from '@emotion/styled';
import sectionBgDesk from '@/images/main/reserved/section-bg-desk.jpg';
import sectionBgTablet from '@/images/main/reserved/section-bg-tablet.jpg';
import sectionBgMob from '@/images/main/reserved/section-bg-mob.jpg';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(55)}px;
  background-image: url(${sectionBgMob});
  background-position: bottom 0 left 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
