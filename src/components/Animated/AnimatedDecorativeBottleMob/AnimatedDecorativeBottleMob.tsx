import { AnimatePresence, Variants } from 'framer-motion';
import { FC } from 'react';
import bottle from '@/images/main/bottle/bottle.png';
import hand from '@/images/main/bottle/hand.png';
import stand from '@/images/main/bottle/stand.png';
import {
  Bottle,
  BottleWrap,
  Container,
  HandImg,
  StandImg,
  StickyBottleWrap,
} from './AnimatedDecorativeBottleMob.styled';
import { IProps } from './AnimatedDecorativeBottleMob.types';

const AnimatedDecorativeBottleMob: FC<IProps> = ({ inView }) => {
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

  const bottleVariants: Variants = {
    initial: { opacity: 0, x: '-80%' },
    animate: { opacity: 1, x: 0, transition },
    exit: { opacity: 0, x: '-80%', transition },
  };

  return (
    <Container>
      <StickyBottleWrap>
        <BottleWrap>
          <AnimatePresence>
            {inView && (
              <StandImg
                src={stand}
                alt='Стенд'
                variants={standVariants}
                initial='initial'
                exit='exit'
                key='stand-mob'
              />
            )}
            {inView && (
              <Bottle
                src={bottle}
                alt='Пляшка'
                variants={bottleVariants}
                initial='initial'
                exit='exit'
                key='bottle-mob'
              />
            )}
            {inView && (
              <HandImg
                src={hand}
                alt='Рука'
                variants={handVariants}
                initial='initial'
                exit='exit'
                key='hand-mob'
              />
            )}
          </AnimatePresence>
        </BottleWrap>
      </StickyBottleWrap>
    </Container>
  );
};

export default AnimatedDecorativeBottleMob;
