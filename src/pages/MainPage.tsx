import { FC, useEffect } from 'react';
import Main from '@MainPageComponents/Main';
import Header from '@GeneralComponents/Header';
import { useAllImagesVisible } from '@/hooks';
import { disableScroll, unDisableScroll } from '@/utils';

const MainPage: FC = () => {
  const allImagesVisible = useAllImagesVisible();

  useEffect(() => {
    disableScroll();
  }, []);

  useEffect(() => {
    if (allImagesVisible) {
      unDisableScroll();
    }
  }, [allImagesVisible]);

  return (
    <>
      <Header />
      <Main isLoaded={allImagesVisible} />
    </>
  );
};

export default MainPage;
