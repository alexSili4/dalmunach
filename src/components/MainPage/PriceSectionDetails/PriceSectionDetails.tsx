import { FC, useRef } from 'react';
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
} from './PriceSectionDetails.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

const AnimatedProjectOwnersSectionPrice: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    margin: '-300px 0px -300px 0px',
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

  const firstElementVariants: Variants = {
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

  const secondElementVariants: Variants = {
    hidden: {
      x: '-100%',
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
    <Container
      ref={containerRef}
      initial='hidden'
      animate={animate}
      variants={containerVariants}
    >
      <Content>
        <Element variants={firstElementVariants}>
          <TextWrap>
            <Text>Віскі Dalmunach Distillery XXI century</Text>
            <PriceWrap>
              <Price>4499</Price>
              <Currency>ГРН</Currency>
            </PriceWrap>
          </TextWrap>
        </Element>
        <Element variants={secondElementVariants}>
          <BottleImg src={primaryBottle} alt='Пляшка' />
        </Element>
      </Content>
    </Container>
  );
};

export default AnimatedProjectOwnersSectionPrice;
