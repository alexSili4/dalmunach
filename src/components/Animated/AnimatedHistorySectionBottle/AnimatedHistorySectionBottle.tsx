import { FC, useRef } from 'react';
import { Bottle, Container } from './AnimatedHistorySectionBottle.styled';
import primaryBottle from '@/images/main/bottle/primary-bottle-min.png';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

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
      <Bottle src={primaryBottle} alt='Пляшка' variants={elementVariants} />
    </Container>
  );
};

export default AnimatedHistorySectionBottle;
