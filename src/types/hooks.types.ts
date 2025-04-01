import { VariantLabels, Variants } from 'framer-motion';
import { MotionValueNumber, Strings } from './types';

export interface IUseAnimatedSectionTitleProps {
  text?: string;
  inView: boolean;
}

export interface IUseAnimatedSectionTitle {
  elementVariants: Variants;
  containerVariants: Variants;
  animate: VariantLabels;
  words: Strings;
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
