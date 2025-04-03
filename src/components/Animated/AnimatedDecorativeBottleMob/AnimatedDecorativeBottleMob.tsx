import { AnimatePresence, Transition } from 'framer-motion';
import { FC } from 'react';
import hand from '@/images/main/bottle/hand-min.png';
import stand from '@/images/main/bottle/stand-min.png';
import {
  BottleWrap,
  Container,
  HandImg,
  StandImg,
  StickyBottleWrap,
} from './AnimatedDecorativeBottleMob.styled';
import { IProps } from './AnimatedDecorativeBottleMob.types';
import AnimatedDecorativeBottleMobImages from '@AnimatedComponents/AnimatedDecorativeBottleMobImages';

const AnimatedDecorativeBottleMob: FC<IProps> = ({
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
      <StickyBottleWrap>
        <BottleWrap>
          <AnimatePresence>
            {showAnimation && (
              <StandImg
                src={stand}
                alt='Стенд'
                key='stand-mob'
                initial={{ opacity: 0, x: '-80%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '80%' }}
                transition={transition}
              />
            )}
            {showAnimation && (
              <AnimatedDecorativeBottleMobImages
                bottleImgs={bottleImgs}
                activeIndex={activeIndex}
                onAnimationComplete={onAnimationComplete}
              />
            )}
            {showAnimation && (
              <HandImg
                src={hand}
                alt='Рука'
                key='hand-mob'
                initial={{ opacity: 0, x: '80%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-80%' }}
                transition={transition}
              />
            )}
          </AnimatePresence>
        </BottleWrap>
      </StickyBottleWrap>
    </Container>
  );
};

export default AnimatedDecorativeBottleMob;
