import { useInView, Variants } from 'framer-motion';
import { FC, useRef } from 'react';
import saxophonistText from '@/images/main/distillery/saxophonist-text-min.png';
import saxophonist from '@/images/main/distillery/saxophonist-min.png';
import {
  SaxophonistImgWrap,
  SaxophonistImg,
  SaxophonistTextImg,
} from './AnimatedDistillerySectionImages.styled';

const AnimatedDistillerySectionImages: FC = () => {
  const saxophonistImgWrapRef = useRef<HTMLDivElement>(null);
  const manImgWrapInView = useInView(saxophonistImgWrapRef, {
    margin: '-200px 0px -200px 0px',
  });
  const animate = manImgWrapInView ? 'visible' : 'hidden';

  const saxophonistImgWrapContainerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const saxophonistImgVariants: Variants = {
    hidden: {
      x: '-100%',
      y: '100%',
      opacity: 0,
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition,
    },
  };

  const manImgVariants: Variants = {
    hidden: {
      x: '-50%',
      y: '50%',
      scale: 0.1,
      opacity: 0,
      transition: {
        ...transition,
        delay: 0.8,
      },
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        ...transition,
        delay: 0.8,
      },
    },
  };

  return (
    <>
      <SaxophonistImgWrap
        ref={saxophonistImgWrapRef}
        variants={saxophonistImgWrapContainerVariants}
        initial='hidden'
        animate={animate}
      >
        <SaxophonistTextImg
          src={saxophonistText}
          alt='Надпис'
          variants={manImgVariants}
        />
        <SaxophonistImg
          src={saxophonist}
          alt='Саксофоніст'
          variants={saxophonistImgVariants}
        />
      </SaxophonistImgWrap>
    </>
  );
};

export default AnimatedDistillerySectionImages;
