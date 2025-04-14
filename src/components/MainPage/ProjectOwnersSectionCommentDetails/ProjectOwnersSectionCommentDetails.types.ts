import { Strings } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  strings: Strings;
  title: string;
  subtitle: string;
  isFlexEnd?: boolean;
}

export interface IStyledContainerProps {
  isFlexEnd?: boolean;
}
