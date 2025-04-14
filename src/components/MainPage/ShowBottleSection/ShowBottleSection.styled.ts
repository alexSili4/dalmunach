import styled from '@emotion/styled';
import sectionBgDesk from '@/images/main/showBottle/section-bg-desk-min.jpg';
import sectionBgMob from '@/images/main/showBottle/section-bg-mob-min.jpg';
import sectionBgTablet from '@/images/main/showBottle/section-bg-tablet-min.jpg';
import { animations } from '@/constants';
import { IStyledContainerProps } from './ShowBottleSection.types';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(16)}px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(48)}px;
    padding-bottom: ${({ theme }) => theme.spacing(79)}px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(64)}px;
    padding-bottom: ${({ theme }) => theme.spacing(105)}px;
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  height: 2000px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 3750px;
  }
`;

export const Content = styled.div<IStyledContainerProps>`
  position: sticky;
  top: ${({ top }) => top}px;
  left: 0;
  height: 1439px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 927px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 1264px;
    background-image: url(${sectionBgDesk});
  }
`;

export const DeregentImg = styled.img`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.bottle + 1000000};
  top: 35px;
  left: calc(50% - 223px);
  width: 387px;
  height: 330px;
  animation: ${animations.deregentMob} 12s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 270px;
    left: calc(50% + 123px);
    width: 571px;
    height: 488px;
    animation: ${animations.deregent} 12s linear infinite;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 359px;
    left: calc(50% + 164px);
    width: 762px;
    height: 650px;
  }
`;

export const PeopleMobImg = styled.img`
  position: absolute;
  top: 332px;
  right: 16px;
  width: 172px;
  height: 200px;
  animation: ${animations.montyPython} 6s steps(1) infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const PeopleDeskImg = styled.img`
  position: absolute;
  top: 403px;
  left: 119px;
  width: 387px;
  height: 450px;
  animation: ${animations.montyPython} 6s steps(1) infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 537px;
    left: 158px;
    width: 516px;
    height: 600px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const RayImg = styled.img`
  position: absolute;
  top: 406px;
  left: -75px;
  width: 643px;
  height: 314px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: -5px;
    left: -56px;
    width: 1064px;
    height: 519px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -8px;
    left: -75px;
    width: 1418px;
    height: 692px;
  }
`;

export const SculptureImg = styled.img`
  position: absolute;
  top: 290px;
  left: -35px;
  width: 240px;
  height: 232px;
  animation: ${animations.montyPythonReverse} 7s steps(1) infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 36px;
    left: -83px;
    width: 577px;
    height: 524px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 47px;
    left: -110px;
    width: 769px;
    height: 699px;
  }
`;

export const EllipseLeft = styled.div`
  position: absolute;
  top: 307px;
  left: -105px;
  width: 213px;
  aspect-ratio: 1 / 1;
  background-color: #e63c00;
  border-radius: 50%;
  opacity: 0.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 110px;
    left: -240px;
    width: 480px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 145px;
    left: -320px;
    width: 640px;
  }
`;

export const EllipseRight = styled.div`
  position: absolute;
  top: 140px;
  right: -206px;
  width: 300px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  opacity: 0.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 447px;
    right: -215px;
    width: 430px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 595px;
    right: -286px;
    width: 573px;
  }
`;
