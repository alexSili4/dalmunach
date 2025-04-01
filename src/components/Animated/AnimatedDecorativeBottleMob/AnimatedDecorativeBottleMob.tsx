import { AnimatePresence } from 'framer-motion';
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
  inView,
  activeIndex,
  bottleImgs,
}) => {
  return (
    <Container>
      <StickyBottleWrap>
        <BottleWrap>
          <AnimatePresence>
            {inView && (
              <StandImg
                src={stand}
                alt='Стенд'
                key='stand-mob'
                initial={{ opacity: 0, x: '-80%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '80%' }}
                transition={{ duration: 1.2 }}
              />
            )}
            {inView && (
              <AnimatedDecorativeBottleMobImages
                bottleImgs={bottleImgs}
                activeIndex={activeIndex}
              />
            )}
            {inView && (
              <HandImg
                src={hand}
                alt='Рука'
                key='hand-mob'
                initial={{ opacity: 0, x: '80%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-80%' }}
                transition={{ duration: 1.2 }}
              />
            )}
          </AnimatePresence>
        </BottleWrap>
      </StickyBottleWrap>
    </Container>
  );
};

export default AnimatedDecorativeBottleMob;
