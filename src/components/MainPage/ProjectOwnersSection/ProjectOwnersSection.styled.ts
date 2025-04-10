import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/projectOwners/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/projectOwners/section-bg-tablet-min.jpg';
import sectionBgDesk from '@/images/main/projectOwners/section-bg-desk-min.jpg';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(24)}px;
  padding-bottom: calc(100vh + ${({ theme }) => theme.spacing(24)}px);
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(63)}px;
    padding-bottom: ${({ theme }) => theme.spacing(52)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(84)}px;
    padding-bottom: ${({ theme }) => theme.spacing(69)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const BgCutPicture = styled.picture`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const BgCutImg = styled.img`
  width: 100%;
`;
