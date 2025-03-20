import { FC, Suspense, useEffect, useState } from 'react';
import { Main } from './SharedLayout.styled';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '@GeneralComponents/Loader';
import Header from '@GeneralComponents/Header';
import { PagePaths } from '@/constants';
import { IOutletContext } from '@/types/types';

const SharedLayout: FC = () => {
  const [isLegalDrinkingAgeUser, setIsLegalDrinkingAgeUser] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const updateIsLegalDrinkingAgeUser = (data: boolean) => {
    setIsLegalDrinkingAgeUser(data);
  };

  const outletContext: IOutletContext = {
    updateIsLegalDrinkingAgeUser,
  };

  useEffect(() => {
    if (!isLegalDrinkingAgeUser) {
      navigate(PagePaths.warning);
    } else {
      navigate(PagePaths.root);
    }
  }, [isLegalDrinkingAgeUser, navigate]);

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet context={outletContext} />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
