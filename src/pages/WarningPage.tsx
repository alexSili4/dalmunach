import { FC } from 'react';
import Warning from '@WarningPageComponents/Warning';
import { Func, SetBooleanFunc } from '@/types/funcs.types';

export interface IProps {
  updateIsLegalDrinkingAgeUser: SetBooleanFunc;
  onSectionLoaded: Func;
}

const WarningPage: FC<IProps> = ({
  updateIsLegalDrinkingAgeUser,
  onSectionLoaded,
}) => {
  return (
    <Warning
      updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
      onSectionLoaded={onSectionLoaded}
    />
  );
};

export default WarningPage;
