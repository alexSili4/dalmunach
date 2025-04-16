import { Func } from '@/types/funcs.types';
import { MotionValueNumber, RefDivObject, Strings } from '@/types/types';

export interface IProps {
  showAnimation: boolean;
  bottleScale: MotionValueNumber;
  activeIndex: MotionValueNumber;
  bottleImgs: Strings;
  onAnimationComplete: Func;
  bottleWrapRef: RefDivObject;
  isBottleAnimation: boolean;
  nextSectionInViewWithMargin: boolean;
  nextSectionInView: boolean;
  sectionInView: boolean;
}
