import { FC } from 'react';
import {
  Container,
  Word,
  Bullet,
  Text,
} from './AnimatedAboutSectionTextPart.styled';
import { IProps } from './AnimatedAboutSectionTextPart.types';
import bullet from '@/images/main/about/bullet.png';

const AnimatedAboutSectionTextPart: FC<IProps> = ({
  variants,
  textWord,
  isFirstItem,
}) => {
  return (
    <Container>
      <Text variants={variants}>
        {isFirstItem && (
          <>
            <Bullet src={bullet} alt='Маркер' />
            {'  '}
          </>
        )}
        <Word>{textWord}</Word>
      </Text>
    </Container>
  );
};

export default AnimatedAboutSectionTextPart;
