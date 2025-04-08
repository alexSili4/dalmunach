import { FC } from 'react';
import { IProps } from './AnimatedProjectOwnersSectionCommentSubtitle.types';
import {
  Text,
  Word,
} from './AnimatedProjectOwnersSectionCommentSubtitle.styled';

const AnimatedProjectOwnersSectionCommentSubtitle: FC<IProps> = ({
  textWord,
  variants,
}) => {
  return (
    <Text>
      <Word variants={variants}>{textWord}</Word>
    </Text>
  );
};

export default AnimatedProjectOwnersSectionCommentSubtitle;
