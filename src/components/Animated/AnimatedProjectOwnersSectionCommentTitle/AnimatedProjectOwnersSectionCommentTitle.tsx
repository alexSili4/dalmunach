import { FC } from 'react';
import { IProps } from './AnimatedProjectOwnersSectionCommentTitle.types';
import { Text, Word } from './AnimatedProjectOwnersSectionCommentTitle.styled';

const AnimatedProjectOwnersSectionCommentTitle: FC<IProps> = ({
  textWord,
  variants,
}) => {
  return (
    <Text>
      <Word variants={variants}>{textWord}</Word>
    </Text>
  );
};

export default AnimatedProjectOwnersSectionCommentTitle;
