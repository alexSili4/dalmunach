import { FC, useRef, useState } from 'react';
import delicious from '@/images/main/preview/delicious-min.png';
import deliciousMob from '@/images/main/preview/delicious-mob-min.png';
import howGood from '@/images/main/preview/how-good-min.png';
import {
  DeliciousPicture,
  HowGoodImg,
  Container,
  DeliciousPictureWrap,
  HowGoodImgWrap,
} from './AnimatedPreviewSectionImages.styled';
import { theme } from '@/constants';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

const AnimatedPreviewSectionImages: FC = () => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const imgInView = useInView(imgRef, {
    margin: '-100px 0px -100px 0px',
    once: true,
  });
  const animate: VariantLabels = imgInView ? 'visible' : 'hidden';
  const deliciousMedia = `(min-width: ${theme.breakpoints.tablet}px)`;

  const transition: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 0.8,
  };

  const transitionWithDelay: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 0.8,
    delay: 0.8,
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const leftImgVariants: Variants = {
    hidden: {
      x: '-100%',
      opacity: 0,
      transition: transitionWithDelay,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition,
    },
  };

  const rightImgVariants: Variants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: transitionWithDelay,
    },
  };

  const onAnimationStart = () => {
    setShowAnimation(false);
  };

  const onAnimationComplete = () => {
    if (!imgInView) {
      return;
    }

    setShowAnimation(true);
  };

  return (
    <Container variants={containerVariants} initial='hidden' animate={animate}>
      <DeliciousPictureWrap
        variants={leftImgVariants}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationComplete}
      >
        <DeliciousPicture ref={imgRef} showAnimation={showAnimation}>
          <source srcSet={delicious} media={deliciousMedia} />
          <img src={deliciousMob} alt='Декоративне зображення' />
        </DeliciousPicture>
      </DeliciousPictureWrap>
      <HowGoodImgWrap
        variants={rightImgVariants}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationComplete}
      >
        <HowGoodImg
          src={howGood}
          alt='Декоративне зображення'
          showAnimation={showAnimation}
        />
      </HowGoodImgWrap>
    </Container>
  );
};

export default AnimatedPreviewSectionImages;
