import { FC, useRef } from 'react';
import {
  Bottle,
  Container,
  Element,
  ShadowImg,
} from './AnimatedHistorySectionBottle.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { bottleImgs } from '@/constants';
import shadow from '@/images/main/bottle/shadow.webp';

const AnimatedHistorySectionBottle: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-150px 0px -300px 0px',
    once: true,
  });
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

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
      x: -100,
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
      <Element variants={elementVariants}>
        <ShadowImg src={shadow} alt='Тінь' />
        <Bottle src={bottleImgs[0]} alt='Пляшка' />
      </Element>
    </Container>
  );
};

export default AnimatedHistorySectionBottle;
