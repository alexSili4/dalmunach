import styled from '@emotion/styled';
import frame from '@/images/preview/frame.png';
import sectionBgMob from '@/images/preview/section-bg-mob.jpg';
import sectionBgTablet from '@/images/preview/section-bg-tablet.jpg';
import sectionBgDesk from '@/images/preview/section-bg-desk.jpg';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(150)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

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

export const VideoWrap = styled.div`
  height: 356px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${frame});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 461px;
    height: 864px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 614px;
    height: 1151px;
  }
`;
