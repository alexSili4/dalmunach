import { FC } from 'react';
import { IProps } from './Warning.types';
import HeroSection from '@WarningPageComponents/HeroSection';

const Warning: FC<IProps> = ({
  updateIsLegalDrinkingAgeUser,
  onSectionLoaded,
}) => {
  return (
    <>
      <HeroSection
        updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
        onSectionLoaded={onSectionLoaded}
      />
    </>
  );
};

export default Warning;
