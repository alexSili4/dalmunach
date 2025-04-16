import { Func } from '@/types/funcs.types';
import { MotionValueNumber, Strings } from '@/types/types';
import { VariantLabels, Variants } from 'framer-motion';

export interface IProps {
  activeIndex: MotionValueNumber;
  bottleImgs: Strings;
  onAnimationComplete: Func;
  containerVariants: Variants;
  animate: VariantLabels;
  standVariants: Variants;
  bottleVariants: Variants;
}
