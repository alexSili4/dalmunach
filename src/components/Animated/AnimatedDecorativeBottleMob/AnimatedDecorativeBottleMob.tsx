import { FC } from 'react';
import hand from '@/images/main/bottle/hand-min.png';
import stand from '@/images/main/bottle/stand-min.png';
import {
  BottleWrap,
  Container,
  HandImg,
  StandImg,
  StickyBottleWrap,
  AnimatedBottle,
} from './AnimatedDecorativeBottleMob.styled';
import { IProps } from './AnimatedDecorativeBottleMob.types';
import AnimatedDecorativeBottleMobImages from '@AnimatedComponents/AnimatedDecorativeBottleMobImages';

const AnimatedDecorativeBottleMob: FC<IProps> = ({
  activeIndex,
  bottleImgs,
  onAnimationComplete,
  containerVariants,
  animate,
  standVariants,
  bottleVariants,
}) => {
  return (
    <Container>
      <StickyBottleWrap>
        <BottleWrap
          initial='hidden'
          animate={animate}
          variants={containerVariants}
        >
          <StandImg src={stand} alt='Стенд' variants={standVariants} />
          <AnimatedBottle
            variants={bottleVariants}
            onAnimationComplete={onAnimationComplete}
          >
            <AnimatedDecorativeBottleMobImages
              bottleImgs={bottleImgs}
              activeIndex={activeIndex}
            />
            <HandImg src={hand} alt='Рука' />
          </AnimatedBottle>
        </BottleWrap>
      </StickyBottleWrap>
    </Container>
  );
};

export default AnimatedDecorativeBottleMob;
