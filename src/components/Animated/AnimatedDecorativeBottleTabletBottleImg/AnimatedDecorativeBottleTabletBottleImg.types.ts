import { MotionValueNumber } from '@/types/types';

export interface IStyledBottleProps {
  isPositionAbsolute: boolean;
  bottleWidthTablet: number;
  bottleWidthDesk: number;
}

export interface IProps {
  activeIndex: MotionValueNumber;
  index: number;
  isPositionAbsolute: boolean;
  img: string;
  isBottleAnimation: boolean;
}
