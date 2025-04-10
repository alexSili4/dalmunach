import { RefDivObject, Strings } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  containerRef: RefDivObject;
  children: ReactNode;
  strings: Strings;
  title: string;
  subtitle: string;
  inView: boolean;
  isFlexEnd?: boolean;
}

export interface IStyledContainerProps {
  isFlexEnd?: boolean;
}
