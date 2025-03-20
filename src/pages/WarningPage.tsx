import { IWarningPageOutletContext } from '@/types/types';
import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import Warning from '@WarningPageComponents/Warning';

const WarningPage: FC = () => {
  const { updateIsLegalDrinkingAgeUser }: IWarningPageOutletContext =
    useOutletContext();

  return (
    <Warning updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser} />
  );
};

export default WarningPage;
