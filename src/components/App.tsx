import { FC, useEffect, useState } from 'react';
import { useAppStore } from '@/store/store';
import { selectGetReservedInfo } from '@/store/app/selectors';
import WarningPage from '@/pages/WarningPage';
import MainPage from '@/pages/MainPage';

const App: FC = () => {
  const getReservedInfo = useAppStore(selectGetReservedInfo);
  const [isLegalDrinkingAgeUser, setIsLegalDrinkingAgeUser] =
    useState<boolean>(false);

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
