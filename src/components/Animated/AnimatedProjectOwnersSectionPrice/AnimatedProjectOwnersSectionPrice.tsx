import { FC } from 'react';
import primaryBottle from '@/images/main/bottle/primary-bottle-min.png';
import {
  BottleImg,
  Container,
  Content,
  Currency,
  Element,
  Price,
  PriceWrap,
  Text,
  TextWrap,
} from './AnimatedProjectOwnersSectionPrice.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedProjectOwnersSectionPrice.types';

const AnimatedProjectOwnersSectionPrice: FC<IProps> = ({ inView }) => {
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
      y: 100,
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
    <Container variants={containerVariants} initial='visible' animate={animate}>
      <Element variants={elementVariants}>
        <Content>
          <TextWrap>
            <Text>Віскі Dalmunach Distillery XXI century</Text>
            <PriceWrap>
              <Price>4499</Price>
              <Currency>ГРН</Currency>
            </PriceWrap>
          </TextWrap>
          <BottleImg src={primaryBottle} alt='Пляшка' />
        </Content>
      </Element>
    </Container>
  );
};

export default AnimatedProjectOwnersSectionPrice;
