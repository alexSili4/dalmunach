import { FC } from 'react';
import { IProps } from './AnimatedHeroSectionTitle.types';
import {
  Title,
  Symbol,
  SymbolContainer,
} from './AnimatedHeroSectionTitle.styled';
import { Variants } from 'framer-motion';

const AnimatedHeroSectionTitle: FC<IProps> = ({ text, inView }) => {
  const animate = inView ? 'visible' : 'hidden';
  const symbols = Array.from(text);

  const transition = {
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const elementVariants: Variants = {
    hidden: { y: '100%', opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Title variants={containerVariants} initial='hidden' animate={animate}>
      {symbols.map((symbol, index) => (
        <SymbolContainer key={index}>
          <Symbol variants={elementVariants}>{symbol}</Symbol>
        </SymbolContainer>
      ))}
    </Title>
  );
};

export default AnimatedHeroSectionTitle;
