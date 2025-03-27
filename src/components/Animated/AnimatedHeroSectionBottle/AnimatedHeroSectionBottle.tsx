import { FC } from 'react';
import bottle from '@/images/main/bottle/bottle-min.png';
import { Bottle } from './AnimatedHeroSectionBottle.styled';
import { IProps } from './AnimatedHeroSectionBottle.types';
import { AnimatePresence, Variants } from 'framer-motion';

const AnimatedHeroSectionBottle: FC<IProps> = ({ inView }) => {
  const transition = { duration: 0.8 };

  const bottleVariants: Variants = {
    initial: { opacity: 0, x: '80%' },
    animate: { opacity: 1, x: 0, transition },
    exit: { opacity: 0, x: '80%', transition },
  };

  return (
    <AnimatePresence>
      {inView && (
        <Bottle
          src={bottle}
          alt='Пляшка'
          variants={bottleVariants}
          initial='initial'
          exit='exit'
          key='hero-bottle-mob'
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedHeroSectionBottle;
