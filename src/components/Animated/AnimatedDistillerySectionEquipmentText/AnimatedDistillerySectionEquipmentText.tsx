import { FC } from 'react';
import { IProps } from './AnimatedDistillerySectionEquipmentText.types';
import { getTextWord } from '@/utils';
import AnimatedDistillerySectionTextPart from '@AnimatedComponents/AnimatedDistillerySectionTextPart';
import { Symbols } from '@/constants';

const AnimatedDistillerySectionEquipmentText: FC<IProps> = ({
  text,
  variants,
}) => {
  const words = text.split(Symbols.space);

  return words.map((word, index, words) => {
    const textWord = getTextWord({ index, word, words });
    const isFirstItem = index === 0;

    return (
      <AnimatedDistillerySectionTextPart
        textWord={textWord}
        variants={variants}
        key={index}
        isFirstItem={isFirstItem}
      />
    );
  });
};

export default AnimatedDistillerySectionEquipmentText;
