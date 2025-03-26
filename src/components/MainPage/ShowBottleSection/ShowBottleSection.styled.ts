import styled from '@emotion/styled';
import sectionBgDesk from '@/images/main/showBottle/section-bg-desk.jpg';
import sectionBgMob from '@/images/main/showBottle/section-bg-mob.jpg';
import sectionBgTablet from '@/images/main/showBottle/section-bg-tablet.jpg';
import { IStyledContainerProps } from './ShowBottleSection.types';
import { animations } from '@/constants';

export const Section = styled.section`
  position: relative;
  height: 6000px;
`;

export const Container = styled.div<IStyledContainerProps>`
  position: sticky;
  top: ${({ top }) => top}px;
  left: 0;
  height: 1500px;
  background-image: url(${sectionBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 1200px;
    background-image: url(${sectionBgTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 1600px;
    background-image: url(${sectionBgDesk});
  }
`;

export const DeregentImg = styled.img`
  position: absolute;
  top: 63px;
  left: 50%;
  width: 387px;
  height: 330px;
  transform: translateX(calc(-50% - 30px));
  offset-path: path(
    'M 100 200 C 300 0, 500 0, 700 200 C 500 400, 300 400, 100 200 Z'
  );
  animation: ${animations.infinityPath} 4s ease-in-out infinite alternate;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 422px;
    left: calc(50% + 123px);
    width: 571px;
    height: 488px;
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 563px;
    left: calc(50% + 164px);
    width: 762px;
    height: 650px;
  }
`;

export const PeopleMobImg = styled.img`
  position: absolute;
  top: 396px;
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
  top: 508px;
  left: 119px;
  width: 387px;
  height: 450px;
  animation: ${animations.montyPython} 6s steps(1) infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 677px;
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
  top: 469px;
  left: -75px;
  width: 643px;
  height: 314px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 93px;
    left: -56px;
    width: 1064px;
    height: 519px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 124px;
    left: -75px;
    width: 1418px;
    height: 692px;
  }
`;

export const SculptureImg = styled.img`
  position: absolute;
  top: 353px;
  left: -35px;
  width: 240px;
  height: 232px;
  animation: ${animations.montyPython} 6s steps(1) infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 170px;
    left: -83px;
    width: 541px;
    height: 524px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 227px;
    left: -110px;
    width: 769px;
    height: 699px;
  }
`;

export const EllipseLeft = styled.div`
  position: absolute;
  top: 370px;
  left: -105px;
  width: 213px;
  aspect-ratio: 1 / 1;
  background-color: #e63c00;
  border-radius: 50%;
  opacity: 0.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 208px;
    left: -240px;
    width: 480px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 277px;
    left: -320px;
    width: 640px;
  }
`;

export const EllipseRight = styled.div`
  position: absolute;
  top: 203px;
  right: -206px;
  width: 300px;
  aspect-ratio: 1 / 1;
  background-color: #234d73;
  border-radius: 50%;
  opacity: 0.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 761px;
    right: -215px;
    width: 430px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 1015px;
    right: -286px;
    width: 573px;
  }
`;
