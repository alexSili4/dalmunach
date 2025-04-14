import { FC, useEffect, useState } from 'react';
import { useAppStore } from '@/store/store';
import { selectGetReservedInfo } from '@/store/app/selectors';
import WarningPage from '@/pages/WarningPage';
import MainPage from '@/pages/MainPage';
import { useAppUpdateVersion } from '@/hooks';

const App: FC = () => {
  const getReservedInfo = useAppStore(selectGetReservedInfo);
  const [isLegalDrinkingAgeUser, setIsLegalDrinkingAgeUser] =
    useState<boolean>(false);
  useAppUpdateVersion();

  useEffect(() => {
    const getCurrentReservedInfo = async () => {
      await getReservedInfo();
    };

    getCurrentReservedInfo();
  }, [getReservedInfo]);

  const updateIsLegalDrinkingAgeUser = (data: boolean) => {
    setIsLegalDrinkingAgeUser(data);
  };

  return isLegalDrinkingAgeUser ? (
    <MainPage />
  ) : (
    <WarningPage updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser} />
  );
};

export default App;
