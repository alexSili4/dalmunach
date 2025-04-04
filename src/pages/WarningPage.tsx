import { FC } from 'react';
import Warning from '@WarningPageComponents/Warning';
import { SetBooleanFunc } from '@/types/funcs.types';
import Loader from '@WarningPageComponents/Loader';
import { useAllImagesVisible } from '@/hooks';

export interface IProps {
  updateIsLegalDrinkingAgeUser: SetBooleanFunc;
}

const WarningPage: FC<IProps> = ({ updateIsLegalDrinkingAgeUser }) => {
  const allImagesVisible = useAllImagesVisible();

  return (
    <>
      <Warning updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser} />
      {!allImagesVisible && <Loader />}
    </>
  );
};

export default WarningPage;
