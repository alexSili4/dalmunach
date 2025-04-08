import { FC } from 'react';
import HeroSectionGoodsCounter from '@MainPageComponents/HeroSectionGoodsCounter';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedHeroSectionGoodsCounter.types';
import { Container, Element } from './AnimatedHeroSectionGoodsCounter.styled';

const AnimatedHeroSectionGoodsCounter: FC<IProps> = ({ isLoaded }) => {
  const animate: VariantLabels = isLoaded ? 'visible' : 'hidden';

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

  const elementVariants: Variants = {
    hidden: {
      x: '100%',
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
    <Container variants={containerVariants} initial='hidden' animate={animate}>
      <Element variants={elementVariants}>
        <HeroSectionGoodsCounter isLoaded={isLoaded} />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionGoodsCounter;
