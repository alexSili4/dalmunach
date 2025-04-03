import { FC, useState } from 'react';
import Warning from '@WarningPageComponents/Warning';
import { SetBooleanFunc } from '@/types/funcs.types';
import Loader from '@WarningPageComponents/Loader';

export interface IProps {
  updateIsLegalDrinkingAgeUser: SetBooleanFunc;
}

const WarningPage: FC<IProps> = ({ updateIsLegalDrinkingAgeUser }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const onSectionLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <Warning
        updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
        onSectionLoaded={onSectionLoaded}
      />
      {!isLoaded && <Loader />}
    </>
  );
};

export default WarningPage;
