import { FC } from 'react';
import { IProps } from './AnimatedPage.types';
import { Container } from './AnimatedPage.styled';
import { Variants } from 'framer-motion';

const AnimatedPage: FC<IProps> = ({ children }) => {
  const transition = { duration: 0.8 };

  const pageVariants: Variants = {
    initial: { opacity: 0, x: '-80%', transition },
    animate: { opacity: 1, x: 0, transition },
    exit: { opacity: 0, x: '80%', transition },
  };

  return (
    <Container
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </Container>
  );
};

export default AnimatedPage;
