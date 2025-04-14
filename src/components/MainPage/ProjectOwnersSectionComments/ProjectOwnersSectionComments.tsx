import { FC } from 'react';
import blyznyukPlaton from '@/images/main/projectOwners/blyznyuk-platon-min.png';
import zamoskovnyyRuslan from '@/images/main/projectOwners/zamoskovnyy-ruslan-min.png';
import ProjectOwnersSectionCommentDetails from '@MainPageComponents/ProjectOwnersSectionCommentDetails';
import {
  Container,
  BlyznyukPlatonImg,
  ZamoskovnyyRuslanImg,
} from './ProjectOwnersSectionComments.styled';

const ProjectOwnersSectionComments: FC = () => {
  const firstCommentText = [
    'Аромат: солод, білий виноград, літні яблука, ноти лимонної цедри, спецій. Ваніль та трохи вершковості.',
    'Смак: сильний початок, збалансований. Фрукти, трохи зеленого банана, грейпфрут, трава та соснові голки.',
    'Посмак: середньої тривалості. Фруктові ноти протягом усього.',
  ];
  const secondCommentText = [
    'Колір: світло-солом’яний, блискучий.',
    'Аромат: трава, солоджений ячмінь, зелене яблуко, цитруси, парфумність.',
    'Смак: збалансованість, пряність, гірчинка грейпфрута, фруктова солодкість, льодяники, свіжість.',
    'Посмак: середній, пряний, м’ята, зелений банан.',
  ];

  return (
    <Container>
      <ProjectOwnersSectionCommentDetails
        title='Руслан Замосковний'
        subtitle='Засновник проєкту Scyfion'
        strings={firstCommentText}
      >
        <ZamoskovnyyRuslanImg
          src={zamoskovnyyRuslan}
          alt='Замосковний Руслан'
        />
      </ProjectOwnersSectionCommentDetails>
      <ProjectOwnersSectionCommentDetails
        title='Платон Близнюк'
        subtitle='Співвласник проєкту Scyfion'
        strings={secondCommentText}
        isFlexEnd
      >
        <BlyznyukPlatonImg src={blyznyukPlaton} alt='Близнюк Платон' />
      </ProjectOwnersSectionCommentDetails>
    </Container>
  );
};

export default ProjectOwnersSectionComments;
