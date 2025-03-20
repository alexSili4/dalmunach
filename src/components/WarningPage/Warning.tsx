import { FC } from 'react';
import { IProps } from './Warning.types';
import HeroSection from '@WarningPageComponents/HeroSection';

const Warning: FC<IProps> = ({ updateIsLegalDrinkingAgeUser }) => {
  return (
    <>
      <HeroSection
        updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
      />
    </>
  );
};

export default Warning;
