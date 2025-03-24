import { FC } from 'react';
import {
  Bottle,
  BottleWrap,
  Container,
  HandImg,
  StandImg,
} from './AnimatedDecorativeBottleTablet.styled';
import { IProps } from './AnimatedDecorativeBottleTablet.types';
import bottle from '@/images/main/bottle/bottle.png';
import hand from '@/images/main/bottle/hand.png';
import stand from '@/images/main/bottle/stand.png';
import { AnimatePresence, Variants } from 'framer-motion';

const AnimatedDecorativeBottleTablet: FC<IProps> = ({ scale, inView }) => {
  const transition = { duration: 1.2 };

  const handVariants: Variants = {
    initial: { opacity: 0, x: '80%' },
    animate: { opacity: 1, x: 0, transition },
    exit: { opacity: 0, x: '-80%', transition },
  };

  const standVariants: Variants = {
    initial: { opacity: 0, x: '-80%' },
    animate: { opacity: 1, x: 0, transition },
    exit: { opacity: 0, x: '80%', transition },
  };

  return (
    <Container>
      <BottleWrap
        style={{
          scale,
          translateX: '-30%',
          translateY: '-45%',
          transformOrigin: 'center bottom',
        }}
      >
        <AnimatePresence>
          {inView && (
            <StandImg
              src={stand}
              alt='Стенд'
              variants={standVariants}
              initial='initial'
              exit='exit'
              key='hand-tablet'
            />
          )}
          <Bottle src={bottle} alt='Пляшки' />
          {inView && (
            <HandImg
              src={hand}
              alt='Рука'
              variants={handVariants}
              initial='initial'
              exit='exit'
              key='bottle-tablet'
            />
          )}
        </AnimatePresence>
      </BottleWrap>
    </Container>
  );
};

export default AnimatedDecorativeBottleTablet;
