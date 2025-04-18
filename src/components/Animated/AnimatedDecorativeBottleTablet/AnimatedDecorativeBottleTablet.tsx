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
  activeIndex,
  bottleImgs,
  onAnimationComplete,
  bottleWrapRef,
  animate,
  containerVariants,
  elementVariants,
  transition,
  shouldShowStand,
  shouldShowHand,
}) => {
  return (
    <Container initial='visible' animate={animate} variants={containerVariants}>
      <BottleWrap
        ref={bottleWrapRef}
        style={{
          scale,
          translateX: '-50%',
          translateY: '-50%',
          transformOrigin: 'center bottom',
        }}
        variants={elementVariants}
      >
        <AnimatePresence>
          {shouldShowStand && (
            <StandImg
              src={stand}
              alt='Стенд'
              key='stand-tablet'
              initial={{ y: '100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={transition}
            />
          )}
          <AnimatedDecorativeBottleTabletImages
            activeIndex={activeIndex}
            bottleImgs={bottleImgs}
          />
          {shouldShowHand && (
            <HandImg
              src={hand}
              alt='Рука'
              key='hand-tablet'
              initial={{ y: '-70%' }}
              animate={{ y: 0 }}
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
