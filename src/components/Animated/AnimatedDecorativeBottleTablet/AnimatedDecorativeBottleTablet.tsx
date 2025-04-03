import { FC } from 'react';
import {
  BottleWrap,
  Container,
  HandImg,
  StandImg,
} from './AnimatedDecorativeBottleTablet.styled';
import { IProps } from './AnimatedDecorativeBottleTablet.types';
import hand from '@/images/main/bottle/hand-min.png';
import stand from '@/images/main/bottle/stand-min.png';
import { AnimatePresence } from 'framer-motion';
import AnimatedDecorativeBottleTabletImages from '@AnimatedComponents/AnimatedDecorativeBottleTabletImages';

const AnimatedDecorativeBottleTablet: FC<IProps> = ({
  scale,
  inView,
  activeIndex,
  bottleImgs,
}) => {
  return (
    <Container>
      <BottleWrap
        style={{
          scale,
          translateX: '-50%',
          translateY: '-50%',
          transformOrigin: 'center bottom',
        }}
      >
        <AnimatePresence>
          {inView && (
            <StandImg
              src={stand}
              alt='Стенд'
              key='stand-tablet'
              initial={{ opacity: 0, x: '-80%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '80%' }}
              transition={{ duration: 1.2 }}
            />
          )}
          <AnimatedDecorativeBottleTabletImages
            activeIndex={activeIndex}
            bottleImgs={bottleImgs}
          />
          {inView && (
            <HandImg
              src={hand}
              alt='Рука'
              key='hand-tablet'
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
