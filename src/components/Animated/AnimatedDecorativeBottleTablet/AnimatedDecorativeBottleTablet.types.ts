import { Func } from '@/types/funcs.types';
import { MotionValueNumber, Strings } from '@/types/types';

export interface IProps {
  scale: MotionValueNumber;
  showAnimation: boolean;
  activeIndex: MotionValueNumber;
  bottleImgs: Strings;
  onAnimationComplete: Func;
}
