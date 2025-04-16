import { FC } from 'react';
import {
  Container,
  Word,
  Text,
  Bullet,
} from './AnimatedDistillerySectionTextPart.styled';
import { IProps } from './AnimatedDistillerySectionTextPart.types';
import bullet from '@/images/main/about/bullet.png';

const AnimatedDistillerySectionTextPart: FC<IProps> = ({
  variants,
  textWord,
  isFirstItem,
  isTitle = false,
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
        <Word
          isTitle={isTitle}
          dangerouslySetInnerHTML={{ __html: textWord }}
        ></Word>
      </Text>
    </Container>
  );
};

export default AnimatedDistillerySectionTextPart;
