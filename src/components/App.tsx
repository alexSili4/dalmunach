import { FC, lazy, useEffect, useState } from 'react';
import { useAppStore } from '@/store/store';
import { selectGetReservedInfo } from '@/store/app/selectors';
import { useAppUpdateVersion } from '@/hooks';
import { Route, Routes } from 'react-router-dom';
import { PagePaths } from '@/constants';

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const RootPage = lazy(() => import('@/pages/RootPage'));
const MainPage = lazy(() => import('@/pages/MainPage'));

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

  return (
    <Routes>
      <Route
        path={PagePaths.root}
        element={
          <RootPage
            isLegalDrinkingAgeUser={isLegalDrinkingAgeUser}
            updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
          />
        }
      />
      <Route path={PagePaths.bwr} element={<MainPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
