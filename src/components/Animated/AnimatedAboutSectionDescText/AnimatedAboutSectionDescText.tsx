import { FC } from 'react';
import { IProps } from './AnimatedAboutSectionDescText.types';
import { getTextWord } from '@/utils';
import AnimatedAboutSectionTextPart from '@AnimatedComponents/AnimatedAboutSectionTextPart';
import { Symbols } from '@/constants';

const AnimatedAboutSectionDescText: FC<IProps> = ({ text, variants }) => {
  const words = text.split(Symbols.space);

  return words.map((word, index, words) => {
    const textWord = getTextWord({ index, word, words });
    const isFirstItem = index === 0;

    return (
      <AnimatedAboutSectionTextPart
        textWord={textWord}
        variants={variants}
        key={index}
        isFirstItem={isFirstItem}
      />
    );
  });
};

export default AnimatedAboutSectionDescText;
