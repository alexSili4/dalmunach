import { FC, useRef } from 'react';
import blyznyukPlaton from '@/images/main/projectOwners/blyznyuk-platon-min.png';
import zamoskovnyyRuslan from '@/images/main/projectOwners/zamoskovnyy-ruslan-min.png';
import {
  Container,
  BlyznyukPlatonImg,
  ZamoskovnyyRuslanImg,
} from './ProjectOwnersSectionComments.styled';
import { useInView } from 'framer-motion';
import ProjectOwnersSectionCommentDetails from '@MainPageComponents/ProjectOwnersSectionCommentDetails';

const ProjectOwnersSectionComments: FC = () => {
  const firstCommentRef = useRef<HTMLDivElement>(null);
  const firstCommentInView = useInView(firstCommentRef, {
    margin: '-200px 0px -200px 0px',
  });
  const secondCommentRef = useRef<HTMLDivElement>(null);
  const secondCommentInView = useInView(secondCommentRef, {
    margin: '-200px 0px -200px 0px',
  });

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

  return (
    <Container>
      <ProjectOwnersSectionCommentDetails
        containerRef={firstCommentRef}
        title='Замосковний Руслан'
        subtitle='Засновник проекту Scyfion'
        strings={firstCommentText}
        inView={firstCommentInView}
      >
        <ZamoskovnyyRuslanImg
          src={zamoskovnyyRuslan}
          alt='Замосковний Руслан'
        />
      </ProjectOwnersSectionCommentDetails>
      <ProjectOwnersSectionCommentDetails
        containerRef={secondCommentRef}
        title='Близнюк Платон'
        subtitle='Співвласник проекту Scyfion'
        strings={secondCommentText}
        inView={secondCommentInView}
        isFlexEnd
      >
        <BlyznyukPlatonImg src={blyznyukPlaton} alt='Близнюк Платон' />
      </ProjectOwnersSectionCommentDetails>
    </Container>
  );
};

export default ProjectOwnersSectionComments;
