import { Func } from '@/types/funcs.types';
import { MotionValueNumber, Strings } from '@/types/types';

export interface IProps {
  bottleImgs: Strings;
  activeIndex: MotionValueNumber;
  onAnimationComplete: Func;
}
