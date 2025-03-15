import { ClassNames } from '@/constants';
import styled from '@emotion/styled';
import { IStyledBackgroundProps } from './HeroSectionGoodsCounter.types';
import progressBgMob from '@/images/hero/progress-bg-mob.jpg';

export const Container = styled.div``;

export const BottleWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

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
    height: 107px;
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
`;
