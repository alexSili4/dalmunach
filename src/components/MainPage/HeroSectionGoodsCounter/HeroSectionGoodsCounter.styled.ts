import { ClassNames } from '@/constants';
import styled from '@emotion/styled';
import {
  IStyledBackgroundProps,
  IStyledReservedQuantityWrapProps,
} from './HeroSectionGoodsCounter.types';
import progressBgMob from '@/images/hero/progress-bg-mob.jpg';
import progressBgTablet from '@/images/hero/progress-bg-tablet.png';

export const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(16)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(2)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const Content = styled.div`
  padding-left: ${({ theme }) => theme.spacing(5)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-left: ${({ theme }) => theme.spacing(9)}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(11)}px;
  }
`;

export const BottleWrap = styled.div`
  position: relative;
  display: flex;

  & > .${ClassNames.bottle} {
    position: relative;
    width: 168px;
    height: 176px;
  }

  & > .${ClassNames.progressStroke} {
    position: absolute;
    bottom: 8px;
    left: 40px;
    width: 78px;
    height: 111px;
  }
`;

export const ProgressWrap = styled.div`
  position: absolute;
  bottom: 9px;
  left: 38px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .${ClassNames.progress} {
    width: 80px;
    max-width: 80px;
    height: 109px;
  }
`;

export const Background = styled.div<IStyledBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-${({ progress }) => progress}%);
  background-image: url(${progressBgMob});
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    background-image: url(${progressBgTablet});
  }
`;

export const ReservedQuantityWrap = styled.div<IStyledReservedQuantityWrapProps>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.counter};
  left: 28px;
  bottom: ${({ progress }) => progress}%;
  display: flex;
  padding-left: ${({ theme }) => theme.spacing(13)}px;
  transform: translateY(50%);

  & > svg {
    position: absolute;
    top: 50%;
    left: 0;
    width: 60px;
    height: 4px;
    transform: translateY(-50%);
  }
`;

export const ReservedQuantityText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  align-items: center;
`;

export const ReservedQuantity = styled.p`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
`;

export const ReservedQuantityTitle = styled.p`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
`;

export const TotalQuantityWrap = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.counter};
  top: 0;
  left: 28px;
  display: flex;

  & > svg {
    width: 60px;
    height: 4px;
  }
`;

export const TotalQuantityText = styled.div`
  position: absolute;
  left: -87px;
  bottom: -4px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  align-items: center;
`;

export const TotalQuantity = styled.p`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
`;

export const TotalQuantityTitle = styled.p`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
`;

export const SaleClosedWrap = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.counter};
  top: 35px;
  left: -46px;
  border: 4px solid #222222;
  border-radius: 8px;
  padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(5)}px`};
  transform: rotate(10.83deg);
`;

export const SaleClosedTitle = styled.div`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 14px;
  font-weight: 800;
  line-height: 0.65;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const ReservedLink = styled.a`
  flex-shrink: 0;
  display: flex;
  padding: ${({ theme }) => theme.spacing()}px;
  border: 1px solid #222222;
  border-radius: 100px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 222px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 296px;
  }
`;

export const ReservedLinkTitleWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #222222;
  border-radius: inherit;
  padding: ${({ theme }) => theme.spacing(6)}px;
`;

export const ReservedLinkTitle = styled.span`
  color: #222222;
  font-family: ${({ theme }) => theme.fontFamily.sofiaSans};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 10%;
  text-transform: uppercase;
`;
