import { FC, useRef } from 'react';
import blyznyukPlaton from '@/images/main/projectOwners/blyznyuk-platon-min.png';
import zamoskovnyyRuslan from '@/images/main/projectOwners/zamoskovnyy-ruslan-min.png';
import {
  Container,
  BlyznyukPlatonImg,
  Comment,
  Subtitle,
  Text,
  TextWrap,
  Title,
  TitleWrap,
  ZamoskovnyyRuslanImg,
  ContentWrap,
} from './AnimatedProjectOwnersSectionComments.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';

const AnimatedProjectOwnersSectionComments: FC = () => {
  const firstCommentImgRef = useRef<HTMLImageElement>(null);
  const firstCommentImgInView = useInView(firstCommentImgRef, {
    margin: '-200px 0px -200px 0px',
  });
  const firstCommentImgAnimate: VariantLabels = firstCommentImgInView
    ? 'visible'
    : 'hidden';
  const secondCommentImgRef = useRef<HTMLImageElement>(null);
  const secondCommentImgInView = useInView(secondCommentImgRef, {
    margin: '-200px 0px -200px 0px',
  });
  const secondCommentImgAnimate: VariantLabels = secondCommentImgInView
    ? 'visible'
    : 'hidden';

  const transitionWithDelay: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 0.8,
    delay: 0.8,
  };

  const transition: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 0.8,
  };

  const commentContainerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const firstCommentImgVariants: Variants = {
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

  const firstCommentVariants: Variants = {
    hidden: {
      x: '-100%',
      opacity: 0,
      transition: transitionWithDelay,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: transitionWithDelay,
    },
  };

  const secondCommentImgVariants: Variants = {
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

  const secondCommentVariants: Variants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: transitionWithDelay,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: transitionWithDelay,
    },
  };

  return (
    <Container>
      <Comment
        variants={commentContainerVariants}
        initial='hidden'
        animate={firstCommentImgAnimate}
      >
        <ContentWrap variants={firstCommentVariants}>
          <TextWrap>
            <Text>
              Вискі, створені з любов'ю та майстерністю, розкривають унікальні
              смаки та аромати, які відображають характер кожного регіону. Кожна
              пляшка - це історія, що поєднує традиції та інновації. Досліджуйте
              світ виски, де кожен ковток приносить нові враження та відкриття.
            </Text>
            <TitleWrap>
              <Title>Замосковний Руслан</Title>
              <Subtitle>Співвласник проекту Scyfion</Subtitle>
            </TitleWrap>
          </TextWrap>
        </ContentWrap>
        <ZamoskovnyyRuslanImg
          ref={firstCommentImgRef}
          src={zamoskovnyyRuslan}
          alt='Замосковний Руслан'
          variants={firstCommentImgVariants}
        />
      </Comment>
      <Comment
        variants={commentContainerVariants}
        initial='hidden'
        animate={secondCommentImgAnimate}
        isFlexEnd
      >
        <ContentWrap variants={secondCommentVariants}>
          <TextWrap>
            <Text>
              Вискі, створені з любов'ю та майстерністю, розкривають унікальні
              смаки та аромати, які відображають характер кожного регіону. Кожна
              пляшка - це історія, що поєднує традиції та інновації. Досліджуйте
              світ виски, де кожен ковток приносить нові враження та відкриття.
            </Text>
            <TitleWrap>
              <Title>Близнюк Платон</Title>
              <Subtitle>Співвласник проекту Scyfion</Subtitle>
            </TitleWrap>
          </TextWrap>
        </ContentWrap>
        <BlyznyukPlatonImg
          ref={secondCommentImgRef}
          src={blyznyukPlaton}
          alt='Близнюк Платон'
          variants={secondCommentImgVariants}
        />
      </Comment>
    </Container>
  );
};

export default AnimatedProjectOwnersSectionComments;
