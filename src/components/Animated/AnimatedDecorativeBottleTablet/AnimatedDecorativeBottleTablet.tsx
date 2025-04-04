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
import { AnimatePresence, Transition } from 'framer-motion';
import AnimatedDecorativeBottleTabletImages from '@AnimatedComponents/AnimatedDecorativeBottleTabletImages';

const AnimatedDecorativeBottleTablet: FC<IProps> = ({
  scale,
  showAnimation,
  activeIndex,
  bottleImgs,
  onAnimationComplete,
}) => {
  const transition: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 0.8,
  };

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
          {showAnimation && (
            <StandImg
              src={stand}
              alt='Стенд'
              key='stand-tablet'
              initial={{ x: '-80%' }}
              animate={{ x: 0 }}
              exit={{ x: '80%' }}
              transition={transition}
            />
          )}
          <AnimatedDecorativeBottleTabletImages
            activeIndex={activeIndex}
            bottleImgs={bottleImgs}
          />
          {showAnimation && (
            <HandImg
              src={hand}
              alt='Рука'
              key='hand-tablet'
              initial={{ x: '80%' }}
              animate={{ x: 0 }}
              exit={{ x: '-80%' }}
              transition={transition}
              onAnimationComplete={onAnimationComplete}
            />
          )}
        </AnimatePresence>
      </BottleWrap>
    </Container>
  );
};

export default AnimatedDecorativeBottleTablet;
