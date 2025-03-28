import { FC, Fragment } from 'react';
import { IProps } from './AnimatedHeroSectionTitle.types';
import {
  Title,
  Symbol,
  SymbolContainer,
} from './AnimatedHeroSectionTitle.styled';
import { Variants } from 'framer-motion';
import { Symbols } from '@/constants';

const AnimatedHeroSectionTitle: FC<IProps> = ({ text, inView }) => {
  const animate = inView ? 'visible' : 'hidden';
  const symbols = Array.from(text);

  const transition = {
    duration: 0.9,
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
      {symbols.map((symbol, index) => {
        const isSpace = symbol === Symbols.space;

        return (
          <Fragment key={index}>
            {isSpace ? (
              <br />
            ) : (
              <SymbolContainer>
                <Symbol variants={elementVariants}>{symbol}</Symbol>
              </SymbolContainer>
            )}
          </Fragment>
        );
      })}
    </Title>
  );
};

export default AnimatedHeroSectionTitle;
