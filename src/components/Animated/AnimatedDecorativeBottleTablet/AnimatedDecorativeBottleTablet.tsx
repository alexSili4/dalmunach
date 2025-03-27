import { FC } from 'react';
import {
  Bottle,
  BottleWrap,
  Container,
  HandImg,
  StandImg,
} from './AnimatedDecorativeBottleTablet.styled';
import { IProps } from './AnimatedDecorativeBottleTablet.types';
import bottle from '@/images/main/bottle/bottle-min.png';
import hand from '@/images/main/bottle/hand-min.png';
import stand from '@/images/main/bottle/stand-min.png';
import { AnimatePresence } from 'framer-motion';

const AnimatedDecorativeBottleTablet: FC<IProps> = ({ scale, inView }) => {
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
              initial={{ opacity: 0, x: '-80%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '80%' }}
              transition={{ duration: 1.2 }}
            />
          )}
          <Bottle src={bottle} alt='Пляшки' key='bottle-tablet' />
          {inView && (
            <HandImg
              src={hand}
              alt='Рука'
              initial={{ opacity: 0, x: '80%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-80%' }}
              transition={{ duration: 1.2 }}
            />
          )}
        </AnimatePresence>
      </BottleWrap>
    </Container>
  );
};

export default AnimatedDecorativeBottleTablet;
