import { Variants } from 'framer-motion';

export interface IProps {
  variants: Variants;
  textWord: string;
  isTitle?: boolean;
}

export interface IStyledWordProps {
  isTitle: boolean;
}
