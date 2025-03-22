import { FC } from 'react';
import { IProps } from './AnimatedPage.types';
import { Container } from './AnimatedPage.styled';

const AnimatedPage: FC<IProps> = ({ children }) => {
  return (
    <Container
      initial={{ opacity: 0, x: '-80%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '80%' }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </Container>
  );
};

export default AnimatedPage;
