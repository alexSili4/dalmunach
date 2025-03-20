import { FC, lazy, useEffect } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@GeneralComponents/SharedLayout';
import { useAppStore } from '@/store/store';
import { selectGetReservedInfo } from '@/store/app/selectors';

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const MainPage = lazy(() => import('@/pages/MainPage'));
const WarningPage = lazy(() => import('@/pages/WarningPage'));

const App: FC = () => {
  const getReservedInfo = useAppStore(selectGetReservedInfo);

  useEffect(() => {
    const getCurrentReservedInfo = async () => {
      await getReservedInfo();
    };

    getCurrentReservedInfo();
  }, [getReservedInfo]);

  return (
    <Routes>
      <Route path={PagePaths.root} element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path={PagePaths.root} element={<MainPage />} />
        <Route path={PagePaths.warning} element={<WarningPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
