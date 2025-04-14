import { FC } from 'react';
import { Container, Word } from './AnimatedAboutSectionTextPart.styled';
import { IProps } from './AnimatedAboutSectionTextPart.types';

const AnimatedAboutSectionTextPart: FC<IProps> = ({ variants, textWord }) => {
  return (
    <Container>
      <Word variants={variants}>{textWord}</Word>
    </Container>
  );
};

export default AnimatedAboutSectionTextPart;
