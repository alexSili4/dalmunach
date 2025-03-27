import { FC } from 'react';
import { IProps } from './AnimatedAboutSectionText.types';
import { Text, Word, WordContainer } from './AnimatedAboutSectionText.styled';
import { Variants } from 'framer-motion';

const AnimatedAboutSectionText: FC<IProps> = ({ text, inView }) => {
  const animate = inView ? 'visible' : 'hidden';
  const words = text.split(' ');

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
    <Text variants={containerVariants} initial='hidden' animate={animate}>
      {words.map((word, index) => {
        const lastIndex = words.length - 1;
        const isLastIndex = index === lastIndex;
        const wordWithSpace = `${word} `;
        const targetWord = isLastIndex ? word : wordWithSpace;

        return (
          <WordContainer key={index}>
            <Word variants={elementVariants}>{targetWord}</Word>
          </WordContainer>
        );
      })}
    </Text>
  );
};

export default AnimatedAboutSectionText;
