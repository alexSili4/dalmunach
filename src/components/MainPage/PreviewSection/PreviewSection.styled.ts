import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/preview/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/preview/section-bg-tablet-min.jpg';
import sectionBgDesk from '@/images/main/preview/section-bg-desk-min.jpg';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(120)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(56)}px;
    padding-bottom: ${({ theme }) => theme.spacing(35)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(75)}px;
    padding-bottom: ${({ theme }) => theme.spacing(47)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(20)}px;
`;
