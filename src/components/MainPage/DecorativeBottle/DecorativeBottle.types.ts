import { Func } from '@/types/funcs.types';
import { MotionValueNumber, Strings } from '@/types/types';

export interface IProps {
  showAnimation: boolean;
  bottleScale: MotionValueNumber;
  activeIndex: MotionValueNumber;
  bottleImgs: Strings;
  onAnimationComplete: Func;
}
