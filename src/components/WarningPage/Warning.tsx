import { FC } from 'react';
import { IProps } from './Warning.types';
import HeroSection from '@WarningPageComponents/HeroSection';

const Warning: FC<IProps> = ({
  updateIsLegalDrinkingAgeUser,
  heroSectionRef,
}) => {
  return (
    <>
      <HeroSection
        updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
        sectionRef={heroSectionRef}
      />
    </>
  );
};

export default Warning;
