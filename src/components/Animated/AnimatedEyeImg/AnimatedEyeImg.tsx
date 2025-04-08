import { FC } from 'react';
import eye from '@/images/main/distillery/eye-min.png';
import { Container, EyeImg, Element } from './AnimatedEyeImg.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedEyeImg.types';

const AnimatedEyeImg: FC<IProps> = ({ inView, rotate }) => {
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
      y: '-100%',
      opacity: 0,
      transition,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Container variants={containerVariants} initial='hidden' animate={animate}>
      <Element variants={elementVariants}>
        <EyeImg
          src={eye}
          alt='Око'
          style={{
            rotate,
          }}
        />
      </Element>
    </Container>
  );
};

export default AnimatedEyeImg;
