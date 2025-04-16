import { Variants } from 'framer-motion';

export interface IProps {
  variants: Variants;
  textWord: string;
  isFirstItem?: boolean;
  isTitle?: boolean;
}

export interface IStyledWordProps {
  isTitle: boolean;
}
