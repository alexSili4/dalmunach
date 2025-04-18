import { Func } from '@/types/funcs.types';
import { MotionValueNumber, RefDivObject, Strings } from '@/types/types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

export interface IProps {
  scale: MotionValueNumber;
  activeIndex: MotionValueNumber;
  bottleImgs: Strings;
  onAnimationComplete: Func;
  bottleWrapRef: RefDivObject;
  animate: VariantLabels;
  containerVariants: Variants;
  elementVariants: Variants;
  transition: Transition;
  shouldShowStand: boolean;
  shouldShowHand: boolean;
}
