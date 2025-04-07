import { FC, useRef } from 'react';
import { Bottle, Container } from './AnimatedHeroSectionBottle.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { bottleImgs } from '@/constants';
import { IProps } from './AnimatedHeroSectionBottle.types';

const AnimatedHeroSectionBottle: FC<IProps> = ({ isLoaded }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-250px 0px -230px 0px',
  });
  const bottleInView = isLoaded && inView;
  const animate: VariantLabels = bottleInView ? 'visible' : 'hidden';

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
      opacity: 0,
      x: 100,
      transition,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition,
    },
  };

  return (
    <Container
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <Bottle src={bottleImgs[0]} alt='Пляшка' variants={elementVariants} />
    </Container>
  );
};

export default AnimatedHeroSectionBottle;
