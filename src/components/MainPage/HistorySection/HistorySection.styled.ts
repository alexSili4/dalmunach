import styled from '@emotion/styled';
import sectionBgDesk from '@/images/main/history/section-bg-desk-min.jpg';
import sectionBgTablet from '@/images/main/history/section-bg-tablet-min.jpg';
import sectionBgMob from '@/images/main/history/section-bg-mob-min.jpg';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(187)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-image: url(${sectionBgTablet});
    padding-top: ${({ theme }) => theme.spacing(0)}px;
    padding-bottom: ${({ theme }) => theme.spacing(180)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-image: url(${sectionBgDesk});
    padding-bottom: ${({ theme }) => theme.spacing(243)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
    width: 330px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 440px;
  }
`;

export const Title = styled.h2`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.playfairDisplay};
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 45px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 60px;
  }
`;

export const Text = styled.p`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;

export const PlusesImg = styled.img`
  position: absolute;
  top: 787px;
  left: calc(50% + 119px);
  width: 64px;
  height: 600px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 0px;
    left: calc(50% + 421px);
    width: 118px;
    height: 1100px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    left: calc(50% + 558px);
    width: 157px;
    height: 1466px;
  }
`;

export const ManImg = styled.img`
  position: absolute;
  top: 787px;
  left: calc(50% - 32px);
  width: 156px;
  height: 600px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 569px;
    left: calc(50% + 192px);
    width: 193px;
    height: 743px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 759px;
    left: calc(50% + 256px);
    width: 257px;
    height: 991px;
  }
`;

export const TriangleImg = styled.img`
  position: absolute;
  top: 912px;
  left: 50%;
  width: 422px;
  aspect-ratio: 1 / 1;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 252px;
    width: 716px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 336px;
    width: 954px;
  }
`;
