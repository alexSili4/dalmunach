import { FC } from 'react';
import { Container, Word } from './AnimatedDistillerySectionTextPart.styled';
import { IProps } from './AnimatedDistillerySectionTextPart.types';

const AnimatedDistillerySectionTextPart: FC<IProps> = ({
  variants,
  textWord,
  isTitle = false,
}) => {
  return (
    <Container>
      <Word isTitle={isTitle} variants={variants}>
        {textWord}
      </Word>
    </Container>
  );
};

export default AnimatedDistillerySectionTextPart;
