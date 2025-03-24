import { FC, useEffect, useState } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import { useAppStore } from '@/store/store';
import { selectGetReservedInfo } from '@/store/app/selectors';
import { AnimatePresence } from 'framer-motion';
import WarningPage from '@/pages/WarningPage';
import NotFoundPage from '@/pages/NotFoundPage';
import MainPage from '@/pages/MainPage';
import SharedLayout from '@GeneralComponents/SharedLayout';

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

  return (
    <AnimatePresence mode='wait'>
      {isLegalDrinkingAgeUser ? (
        <Routes key='router'>
          <Route path={PagePaths.root} element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path={PagePaths.root} element={<MainPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      ) : (
        <WarningPage
          updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
          key='Warning'
        />
      )}
    </AnimatePresence>
  );
};

export default App;
