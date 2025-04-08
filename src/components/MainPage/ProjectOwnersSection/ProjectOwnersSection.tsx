import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import { FC } from 'react';
import { Section, BgCutImg, BgCutPicture } from './ProjectOwnersSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ProjectOwnersSectionBgImages from '@MainPageComponents/ProjectOwnersSectionBgImages';
import bgCutDesk from '@/images/main/projectOwners/section-bg-cut-desk-min.png';
import bgCutTablet from '@/images/main/projectOwners/section-bg-cut-tablet-min.png';
import bgCutMob from '@/images/main/projectOwners/section-bg-cut-mob-min.png';
import { theme } from '@/constants';
import AnimatedProjectOwnersSectionComments from '@AnimatedComponents/AnimatedProjectOwnersSectionComments';
import { IProps } from './ProjectOwnersSection.types';

const ProjectOwnersSection: FC<IProps> = ({ sectionRef }) => {
  const bgCutPictureTabletMedia = `(min-width: ${theme.breakpoints.tablet}px)`;
  const bgCutPictureDeskMedia = `(min-width: ${theme.breakpoints.desktop}px)`;

  return (
    <Section ref={sectionRef}>
      <HiddenSectionTitle title='Співвласники проекту Scyfion' />
      <ProjectOwnersSectionBgImages />
      <GeneralContainer>
        <AnimatedProjectOwnersSectionComments />
      </GeneralContainer>
      <BgCutPicture>
        <source srcSet={bgCutDesk} media={bgCutPictureDeskMedia} />
        <source srcSet={bgCutTablet} media={bgCutPictureTabletMedia} />
        <BgCutImg src={bgCutMob} alt='Зріз' />
      </BgCutPicture>
    </Section>
  );
};

export default ProjectOwnersSection;
