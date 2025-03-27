import { FC } from 'react';
import Warning from '@WarningPageComponents/Warning';
import { SetBooleanFunc } from '@/types/funcs.types';

export interface IProps {
  updateIsLegalDrinkingAgeUser: SetBooleanFunc;
}

const WarningPage: FC<IProps> = ({ updateIsLegalDrinkingAgeUser }) => {
  return (
      <Warning updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser} />
  );
};

export default WarningPage;
