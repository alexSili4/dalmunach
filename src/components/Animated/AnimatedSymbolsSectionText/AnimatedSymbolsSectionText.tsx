import { FC } from 'react';
import { IProps } from './AnimatedSymbolsSectionText.types';
import { Text, Word, WordContainer } from './AnimatedSymbolsSectionText.styled';
import { getTextWord } from '@/utils';
import { useAnimatedSectionText } from '@/hooks';

const AnimatedSymbolsSectionText: FC<IProps> = ({ text, inView }) => {
  const { containerVariants, elementVariants, animate, words } =
    useAnimatedSectionText({
      text,
      inView,
    });

  return (
    <Text variants={containerVariants} initial='hidden' animate={animate}>
      {words.map((word, index) => {
        const textWord = getTextWord({ index, word, words });

        return (
          <WordContainer key={index}>
            <Word variants={elementVariants}>{textWord}</Word>
          </WordContainer>
        );
      })}
    </Text>
  );
};

export default AnimatedSymbolsSectionText;
