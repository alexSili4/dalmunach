import { FC } from 'react';
import diagrams from '@/images/main/symbols/diagrams-min.png';
import booklet from '@/images/main/symbols/booklet-min.png';
import {
  BookletImg,
  BookletImgWrap,
  DiagramsImg,
  DiagramsImgWrap,
} from './AnimatedSymbolsSectionImages.styled';
import { AnimatePresence } from 'framer-motion';
import { IProps } from './AnimatedSymbolsSectionImages.types';

const AnimatedSymbolsSectionImages: FC<IProps> = ({ inView }) => {
  return (
    <AnimatePresence>
      {inView && (
        <DiagramsImgWrap
          key='diagrams-img'
          initial={{ rotate: -360, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: -360, scale: 0 }}
          transition={{ duration: 0.8 }}
        >
          <DiagramsImg src={diagrams} alt='Діаграми' />
        </DiagramsImgWrap>
      )}
      {inView && (
        <BookletImgWrap
          key='booklet-img'
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BookletImg src={booklet} alt='Буклет' />
        </BookletImgWrap>
      )}
    </AnimatePresence>
  );
};

export default AnimatedSymbolsSectionImages;
