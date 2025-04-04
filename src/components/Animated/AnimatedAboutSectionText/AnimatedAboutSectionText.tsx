import { FC } from 'react';
import { IProps } from './AnimatedAboutSectionText.types';
import { Text, Word, WordContainer } from './AnimatedAboutSectionText.styled';
import { getTextWord } from '@/utils';
import { useAnimatedSectionText } from '@/hooks';

const AnimatedAboutSectionText: FC<IProps> = ({ text, inView }) => {
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

export default AnimatedAboutSectionText;
