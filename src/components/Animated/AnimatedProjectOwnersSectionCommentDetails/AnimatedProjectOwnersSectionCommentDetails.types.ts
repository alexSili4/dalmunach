import { Strings } from '@/types/types';
import { VariantLabels, Variants } from 'framer-motion';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  containerVariants: Variants;
  animate: VariantLabels;
  elementVariants: Variants;
  strings: Strings;
  title: string;
  subtitle: string;
  inView: boolean;
  isFlexEnd?: boolean;
}

export interface IStyledContainerProps {
  isFlexEnd?: boolean;
}
