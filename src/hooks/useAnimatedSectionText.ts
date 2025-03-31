import { VariantLabels, Variants } from 'framer-motion';
import { Symbols } from '@/constants';
import {
  IUseAnimatedSectionTextProps,
  IUseAnimatedSectionText,
} from '@/types/hooks.types';

const useAnimatedSectionText = ({
  text = '',
  inView,
}: IUseAnimatedSectionTextProps): IUseAnimatedSectionText => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';
  const words = text.split(Symbols.space);

  const transition = {
    duration: 0.9,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const elementVariants: Variants = {
    hidden: { y: '100%', opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return { containerVariants, elementVariants, animate, words };
};

export default useAnimatedSectionText;
