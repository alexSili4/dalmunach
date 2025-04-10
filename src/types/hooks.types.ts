import { VariantLabels, Variants } from 'framer-motion';
import { MotionValueNumber, RefDivObject, Strings } from './types';
import { Func, SetBooleanFunc } from './funcs.types';

export interface IUseAnimatedSectionTitle {
  elementVariants: Variants;
  containerVariants: Variants;
  animate: VariantLabels;
  words: Strings;
}

export interface IUseAnimatedSectionTitleProps {
  text?: string;
  inView: boolean;
}

export interface IUseAnimatedSectionTextProps {
  text?: string;
  inView: boolean;
}

export interface IUseAnimatedSectionText {
  elementVariants: Variants;
  containerVariants: Variants;
  animate: VariantLabels;
  words: Strings;
}

export interface IUseBottleImgOpacityProps {
  index: number;
  activeIndex: MotionValueNumber;
}

export interface IUseParallax {
  containerRef: RefDivObject;
  translateY: MotionValueNumber;
}

export interface IUseBottleAnimation {
  updateShowHandAnimation: SetBooleanFunc;
  showBottleSectionContainerRef: RefDivObject;
  showHandAnimation: boolean;
  bottleImgs: Strings;
  decorativeBottleActiveIndex: MotionValueNumber;
  bottleScale: MotionValueNumber;
  onHandAnimationComplete: Func;
  containerRef: RefDivObject;
  previewRef: RefDivObject;
  isBottleAnimation: boolean;
  bottleWrapRef: RefDivObject;
}

export interface IUseEyeAnimation {
  rotate: MotionValueNumber;
  inView: boolean;
  nextSectionRef: RefDivObject;
}
