import { RefDivObject, Strings } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  containerRef: RefDivObject;
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
