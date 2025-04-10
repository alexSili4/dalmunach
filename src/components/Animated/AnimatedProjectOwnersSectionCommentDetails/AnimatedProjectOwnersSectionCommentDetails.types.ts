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
  containerInView: boolean;
  isFlexEnd?: boolean;
  transformOriginXTablet: number;
  transformOriginYTablet: number;
  transformOriginXDesk: number;
  transformOriginYDesk: number;
}

export interface IStyledContainerProps {
  isFlexEnd?: boolean;
}

export interface IStyledElementProps {
  transformOriginXTablet: number;
  transformOriginYTablet: number;
  transformOriginXDesk: number;
  transformOriginYDesk: number;
}
