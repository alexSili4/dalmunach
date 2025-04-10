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
import { IProps } from './AnimatedProjectOwnersSectionComments.types';

const AnimatedProjectOwnersSectionComments: FC<IProps> = ({ inView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerInView = useInView(containerRef, {
    margin: '-200px 0px -200px 0px',
  });
  const animate: VariantLabels = inView ? 'visible' : 'hidden';
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

  const firstCommentVariants: Variants = {
    hidden: {
      rotate: '-55deg',
      transition,
    },
    visible: {
      rotate: 0,
      transition,
    },
  };

  const secondCommentVariants: Variants = {
    hidden: {
      rotate: '60deg',
      transition,
    },
    visible: {
      rotate: 0,
      transition,
    },
  };

  return (
    <Container ref={containerRef}>
      <AnimatedProjectOwnersSectionCommentDetails
        animate={animate}
        containerVariants={containerVariants}
        elementVariants={firstCommentVariants}
        title='Руслан Замосковний'
        subtitle='Засновник проекту Scyfion'
        strings={firstCommentText}
        containerInView={containerInView}
        transformOriginXTablet={372}
        transformOriginYTablet={759}
        transformOriginXDesk={591}
        transformOriginYDesk={1012}
      >
        <ZamoskovnyyRuslanImg
          src={zamoskovnyyRuslan}
          alt='Замосковний Руслан'
        />
      </AnimatedProjectOwnersSectionCommentDetails>
      <AnimatedProjectOwnersSectionCommentDetails
        animate={animate}
        containerVariants={containerVariants}
        elementVariants={secondCommentVariants}
        title='Платон Близнюк'
        subtitle='Співвласник проекту Scyfion'
        strings={secondCommentText}
        containerInView={containerInView}
        transformOriginXTablet={352}
        transformOriginYTablet={564}
        transformOriginXDesk={591}
        transformOriginYDesk={706}
        isFlexEnd
      >
        <BlyznyukPlatonImg src={blyznyukPlaton} alt='Близнюк Платон' />
      </AnimatedProjectOwnersSectionCommentDetails>
    </Container>
  );
};

export default AnimatedProjectOwnersSectionComments;
