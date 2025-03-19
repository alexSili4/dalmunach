import styled from '@emotion/styled';
import sectionBgDesk from '@/images/reserved/section-bg-desk.jpg';
import sectionBgTablet from '@/images/reserved/section-bg-tablet.jpg';
import sectionBgMob from '@/images/reserved/section-bg-mob.jpg';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(55)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
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
