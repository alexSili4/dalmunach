import { Strings } from '@/types/types';
import { VariantLabels, Variants } from 'framer-motion';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  strings: Strings;
  title: string;
  subtitle: string;
  containerInView: boolean;
  isFlexEnd?: boolean;
  transformOriginXTablet: number;
  transformOriginYTablet: number;
  transformOriginXDesk: number;
  transformOriginYDesk: number;
  animate: VariantLabels;
  containerVariants: Variants;
  elementVariants: Variants;
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
