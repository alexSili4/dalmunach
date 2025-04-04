import { FC } from 'react';
import bgCutDesk from '@/images/main/projectOwners/section-bg-cut-desk-min.png';
import bgCutTablet from '@/images/main/projectOwners/section-bg-cut-tablet-min.png';
import bgCutMob from '@/images/main/projectOwners/section-bg-cut-mob-min.png';
import cheers from '@/images/main/projectOwners/cheers-min.png';
import { theme } from '@/constants';
import {
  BgCutPicture,
  BgCutImg,
  CheersImg,
  EllipseLeft,
  EllipseRight,
} from './ProjectOwnersSectionBgImages.styled';

const ProjectOwnersSectionBgImages: FC = () => {
  const bgCutPictureTabletMedia = `(min-width: ${theme.breakpoints.tablet}px)`;
  const bgCutPictureDeskMedia = `(min-width: ${theme.breakpoints.desktop}px)`;

  return (
    <>
      <BgCutPicture>
        <source srcSet={bgCutDesk} media={bgCutPictureDeskMedia} />
        <source srcSet={bgCutTablet} media={bgCutPictureTabletMedia} />
        <BgCutImg src={bgCutMob} alt='Зріз' />
      </BgCutPicture>
      <CheersImg src={cheers} alt='Декоративний надпис' />
      <EllipseLeft></EllipseLeft>
      <EllipseRight></EllipseRight>
    </>
  );
};

export default ProjectOwnersSectionBgImages;
