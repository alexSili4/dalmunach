import { FC, useRef } from 'react';
import blyznyukPlaton from '@/images/main/projectOwners/blyznyuk-platon-min.png';
import zamoskovnyyRuslan from '@/images/main/projectOwners/zamoskovnyy-ruslan-min.png';
import {
  Container,
  BlyznyukPlatonImg,
  ZamoskovnyyRuslanImg,
} from './AnimatedProjectOwnersSectionComments.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import AnimatedProjectOwnersSectionCommentDetails from '@AnimatedComponents/AnimatedProjectOwnersSectionCommentDetails';

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
  const firstCommentText = [
    'Аромат: солод, білий виноград, літні яблука, ноти лимонної цедри, спецій. Ваніль та трохи вершковості.',
    'Смак: сильний початок, збалансований. Фрукти, трохи зеленого банана, грейпфрут, трава та соснові голки.',
    'Посмак: середньої тривалості. Фруктові ноти протягом усього.',
  ];
  const secondCommentText = [
    'Колір: світло-солом’яний, блискучий. Аромат: трава, солоджений ячмінь, зелене яблуко, цитруси, парфумність.',
    'Смак: збалансованість, пряність, гірчинка грейпфрута, фруктова солодкість, льодяники, свіжість.',
    'Посмак: середній, пряний, м’ята, зелений банан.',
  ];

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

  const containerVariants: Variants = {
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
      <AnimatedProjectOwnersSectionCommentDetails
        animate={firstCommentImgAnimate}
        containerVariants={containerVariants}
        elementVariants={firstCommentVariants}
        title='Замосковний Руслан'
        subtitle='Засновник проекту Scyfion'
        strings={firstCommentText}
        inView={firstCommentImgInView}
      >
        <ZamoskovnyyRuslanImg
          ref={firstCommentImgRef}
          src={zamoskovnyyRuslan}
          alt='Замосковний Руслан'
          variants={firstCommentImgVariants}
        />
      </AnimatedProjectOwnersSectionCommentDetails>
      <AnimatedProjectOwnersSectionCommentDetails
        animate={secondCommentImgAnimate}
        containerVariants={containerVariants}
        elementVariants={secondCommentVariants}
        title='Близнюк Платон'
        subtitle='Співвласник проекту Scyfion'
        strings={secondCommentText}
        inView={secondCommentImgInView}
        isFlexEnd
      >
        <BlyznyukPlatonImg
          ref={secondCommentImgRef}
          src={blyznyukPlaton}
          alt='Близнюк Платон'
          variants={secondCommentImgVariants}
        />
      </AnimatedProjectOwnersSectionCommentDetails>
    </Container>
  );
};

export default AnimatedProjectOwnersSectionComments;
