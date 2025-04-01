import { FC } from 'react';
import { Bottle } from './AnimatedHeroSectionBottle.styled';
import { IProps } from './AnimatedHeroSectionBottle.types';
import { AnimatePresence } from 'framer-motion';
import { bottleImgs } from '@/constants';

const AnimatedHeroSectionBottle: FC<IProps> = ({ inView }) => {
  return (
    <AnimatePresence>
      {inView && (
        <Bottle
          src={bottleImgs[0]}
          alt='Пляшка'
          initial={{ opacity: 0, x: '80%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '80%' }}
          transition={{ duration: 0.8 }}
          key='hero-bottle-mob'
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedHeroSectionBottle;
