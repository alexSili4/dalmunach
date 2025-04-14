import { FC, useEffect, useRef, useState } from 'react';
import {
  Container,
  NumberBg,
} from './AnimatedHeroSectionGoodsCounterNumber.styled';
import { IProps } from './AnimatedHeroSectionGoodsCounterNumber.types';
import AnimatedHeroSectionGoodsCounterAllNumbers from '@AnimatedComponents/AnimatedHeroSectionGoodsCounterAllNumbers';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

const AnimatedHeroSectionGoodsCounterNumber: FC<IProps> = ({
  number,
  isLoaded,
}) => {
  const [numberHeight, setNumberHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-10px 0px -10px 0px',
    once: true,
  });
  const counterInView = isLoaded && inView;
  const animate: VariantLabels = counterInView ? 'visible' : 'hidden';
  const translateY = numberHeight * (number + 1);

  const transition: Transition = {
    type: 'spring',
    stiffness: 15,
    damping: 5,
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const elementVariants: Variants = {
    hidden: {
      transition,
    },
    visible: {
      y: translateY,
      transition,
    },
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      setNumberHeight(container.offsetHeight);
    }
  }, []);

  return (
    <Container
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <NumberBg></NumberBg>
      <AnimatedHeroSectionGoodsCounterAllNumbers
        numberHeight={numberHeight}
        elementVariants={elementVariants}
      />
    </Container>
  );
};

export default AnimatedHeroSectionGoodsCounterNumber;
