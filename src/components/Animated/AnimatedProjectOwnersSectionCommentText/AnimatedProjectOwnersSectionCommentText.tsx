import { FC } from 'react';
import { IProps } from './AnimatedProjectOwnersSectionCommentText.types';
import { getTextWord } from '@/utils';
import { Symbols } from '@/constants';
import {
  Container,
  Word,
} from './AnimatedProjectOwnersSectionCommentText.styled';

const AnimatedProjectOwnersSectionCommentText: FC<IProps> = ({
  text,
  variants,
}) => {
  const words = text.split(Symbols.space);

  return words.map((word, index, words) => {
    const textWord = getTextWord({ index, word, words });

    return (
      <Container key={index}>
        <Word variants={variants}>{textWord}</Word>
      </Container>
    );
  });
};

export default AnimatedProjectOwnersSectionCommentText;
