import { FC, useRef } from 'react';
import Warning from '@WarningPageComponents/Warning';
import { SetBooleanFunc } from '@/types/funcs.types';
import Loader from '@WarningPageComponents/Loader';
import { useLoader } from '@/hooks';

export interface IProps {
  updateIsLegalDrinkingAgeUser: SetBooleanFunc;
}

const WarningPage: FC<IProps> = ({ updateIsLegalDrinkingAgeUser }) => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const isLoaded = useLoader(heroSectionRef);

  return (
    <>
      <Warning
        updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
        heroSectionRef={heroSectionRef}
      />
      {!isLoaded && <Loader />}
    </>
  );
};

export default WarningPage;
