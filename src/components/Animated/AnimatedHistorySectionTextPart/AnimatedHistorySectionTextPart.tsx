import { FC } from 'react';
import { Container, Word } from './AnimatedHistorySectionTextPart.styled';
import { getTextWord } from '@/utils';
import { IProps } from './AnimatedHistorySectionTextPart.types';

const AnimatedHistorySectionTextPart: FC<IProps> = ({ words, variants }) => {
  return words.map((word, index) => {
    const textWord = getTextWord({ index, word, words });

    return (
      <Container key={index}>
        <Word variants={variants}>{textWord}</Word>
      </Container>
    );
  });
};

export default AnimatedHistorySectionTextPart;
