import { MotionValueNumber } from '@/types/types';

export interface IStyledBottleProps {
  isPositionAbsolute: boolean;
}

export interface IProps {
  activeIndex: MotionValueNumber;
  index: number;
  isPositionAbsolute: boolean;
  img: string;
}
