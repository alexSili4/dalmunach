import { FC } from 'react';
import { Container, Word } from './AnimatedDistillerySectionTitlePart.styled';
import { getTextWord } from '@/utils';
import { IProps } from './AnimatedDistillerySectionTitlePart.types';

const AnimatedDistillerySectionTitlePart: FC<IProps> = ({
  words,
  variants,
}) => {
  return words.map((word, index) => {
    const textWord = getTextWord({ index, word, words });

    return (
      <Container key={index}>
        <Word variants={variants}>{textWord}</Word>
      </Container>
    );
  });
};

export default AnimatedDistillerySectionTitlePart;
