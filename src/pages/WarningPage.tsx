import { FC } from 'react';
import Warning from '@WarningPageComponents/Warning';
import AnimatedPage from '@AnimatedComponents/AnimatedPage';
import { SetBooleanFunc } from '@/types/funcs.types';

export interface IProps {
  updateIsLegalDrinkingAgeUser: SetBooleanFunc;
}

const WarningPage: FC<IProps> = ({ updateIsLegalDrinkingAgeUser }) => {
  return (
    <AnimatedPage>
      <Warning updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser} />
    </AnimatedPage>
  );
};

export default WarningPage;
