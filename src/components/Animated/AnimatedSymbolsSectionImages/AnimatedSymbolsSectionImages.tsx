import { FC, useRef } from 'react';
import diagrams from '@/images/main/symbols/diagrams-min.png';
import booklet from '@/images/main/symbols/booklet-min.png';
import {
  BookletImg,
  BookletImgWrap,
  DiagramsImg,
  DiagramsImgWrap,
} from './AnimatedSymbolsSectionImages.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

const AnimatedSymbolsSectionImages: FC = () => {
  const diagramsImgWrapRef = useRef<HTMLImageElement>(null);
  const diagramsImgWrapInView = useInView(diagramsImgWrapRef, {
    margin: '-200px 0px -200px 0px',
    once: true,
  });
  const diagramsImgWrapAnimate: VariantLabels = diagramsImgWrapInView
    ? 'visible'
    : 'hidden';
  const bookletImgWrapRef = useRef<HTMLImageElement>(null);
  const bookletImgWrapInView = useInView(bookletImgWrapRef, {
    margin: '-200px 0px -200px 0px',
    once: true,
  });
  const bookletImgWrapAnimate: VariantLabels = bookletImgWrapInView
    ? 'visible'
    : 'hidden';

  const transition: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 0.8,
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const diagramsImgVariants: Variants = {
    hidden: {
      rotate: -360,
      scale: 0,
      transition,
    },
    visible: {
      rotate: 0,
      scale: 1,
      transition,
    },
  };

  const bookletImgVariants: Variants = {
    hidden: {
      x: '-100%',
      opacity: 0,
      transition,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <>
      <DiagramsImgWrap
        ref={diagramsImgWrapRef}
        variants={containerVariants}
        initial='hidden'
        animate={diagramsImgWrapAnimate}
      >
        <DiagramsImg
          src={diagrams}
          alt='Діаграми'
          variants={diagramsImgVariants}
        />
      </DiagramsImgWrap>
      <BookletImgWrap
        ref={bookletImgWrapRef}
        variants={containerVariants}
        initial='hidden'
        animate={bookletImgWrapAnimate}
      >
        <BookletImg src={booklet} alt='Буклет' variants={bookletImgVariants} />
      </BookletImgWrap>
    </>
  );
};

export default AnimatedSymbolsSectionImages;
