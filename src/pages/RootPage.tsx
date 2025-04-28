import { FC } from 'react';
import WarningPage from '@/pages/WarningPage';
import MainPage from '@/pages/MainPage';
import { SetBooleanFunc } from '@/types/funcs.types';

export interface IProps {
  isLegalDrinkingAgeUser: boolean;
  updateIsLegalDrinkingAgeUser: SetBooleanFunc;
}

const RootPage: FC<IProps> = ({
  isLegalDrinkingAgeUser,
  updateIsLegalDrinkingAgeUser,
}) => {
  return isLegalDrinkingAgeUser ? (
    <MainPage />
  ) : (
    <WarningPage updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser} />
  );
};

export default RootPage;
