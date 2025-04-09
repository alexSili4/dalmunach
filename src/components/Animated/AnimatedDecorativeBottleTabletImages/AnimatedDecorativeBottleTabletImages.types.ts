import { MotionValueNumber, Strings } from '@/types/types';

export interface IProps {
  bottleImgs: Strings;
  activeIndex: MotionValueNumber;
  inView: boolean;
}

export interface IStyledContainerProps {
  inView: boolean;
}
