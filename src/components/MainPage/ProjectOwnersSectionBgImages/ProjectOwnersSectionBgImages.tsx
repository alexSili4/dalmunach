import { FC } from 'react';
import cheers from '@/images/main/projectOwners/cheers-min.png';
import {
  CheersImg,
  EllipseLeft,
  EllipseRight,
} from './ProjectOwnersSectionBgImages.styled';

const ProjectOwnersSectionBgImages: FC = () => {
  return (
    <>
      <CheersImg src={cheers} alt='Декоративний надпис' />
      <EllipseLeft></EllipseLeft>
      <EllipseRight></EllipseRight>
    </>
  );
};

export default ProjectOwnersSectionBgImages;
