import { FC, useEffect, useState } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/store';
import { selectGetReservedInfo } from '@/store/app/selectors';
import { AnimatePresence } from 'framer-motion';
import WarningPage from '@/pages/WarningPage';
import NotFoundPage from '@/pages/NotFoundPage';
import MainPage from '@/pages/MainPage';

const App: FC = () => {
  const location = useLocation();
  const getReservedInfo = useAppStore(selectGetReservedInfo);
  const [isLegalDrinkingAgeUser, setIsLegalDrinkingAgeUser] =
    useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentReservedInfo = async () => {
      await getReservedInfo();
    };

    getCurrentReservedInfo();
  }, [getReservedInfo]);

  const updateIsLegalDrinkingAgeUser = (data: boolean) => {
    setIsLegalDrinkingAgeUser(data);
  };

  useEffect(() => {
    if (!isLegalDrinkingAgeUser) {
      navigate(PagePaths.warning);
    } else {
      navigate(PagePaths.root);
    }
  }, [isLegalDrinkingAgeUser, navigate]);

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path={PagePaths.warning}
          element={
            <WarningPage
              updateIsLegalDrinkingAgeUser={updateIsLegalDrinkingAgeUser}
            />
          }
        />
        {isLegalDrinkingAgeUser && (
          <Route path={PagePaths.root} element={<MainPage />} />
        )}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
