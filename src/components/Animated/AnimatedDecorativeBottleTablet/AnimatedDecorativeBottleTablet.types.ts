import { Func } from '@/types/funcs.types';
import { MotionValueNumber, RefDivObject, Strings } from '@/types/types';

export interface IProps {
  scale: MotionValueNumber;
  showAnimation: boolean;
  activeIndex: MotionValueNumber;
  bottleImgs: Strings;
  onAnimationComplete: Func;
  bottleWrapRef: RefDivObject;
  isBottleAnimation: boolean;
}

export interface IStyledBottleWrapProps {
  bottleWrapLeft: number;
}
