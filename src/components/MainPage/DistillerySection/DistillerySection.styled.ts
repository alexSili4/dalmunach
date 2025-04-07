import styled from '@emotion/styled';
import sectionBgMob from '@/images/main/distillery/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/distillery/section-bg-tablet-min.jpg';
import sectionBgDesk from '@/images/main/distillery/section-bg-desk-min.jpg';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(22)}px;
  padding-bottom: ${({ theme }) => theme.spacing(120)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(60)}px;
    padding-bottom: ${({ theme }) => theme.spacing(194)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(79)}px;
    padding-bottom: ${({ theme }) => theme.spacing(261)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(63)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
    width: 543px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 724px;
  }
`;

export const BottlePicture = styled.picture`
  position: absolute;
  top: 233px;
  left: 16px;
  width: 44px;
  height: 122px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 323px;
    left: auto;
    right: 601px;
    width: 79px;
    height: 174px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 430px;
    right: 801px;
    width: 106px;
    height: 232px;
  }
`;
