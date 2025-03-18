import styled from '@emotion/styled';
import sectionBgDesk from '@/images/showBottle/section-bg-desk.jpg';
import sectionBgMob from '@/images/showBottle/section-bg-mob.jpg';
import sectionBgTablet from '@/images/showBottle/section-bg-tablet.jpg';

export const Section = styled.section`
  position: relative;
  height: 6000px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: contain;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: url(${sectionBgDesk});
  }
`;
