import { FC } from 'react';
import Main from '@MainPageComponents/Main';
import Header from '@GeneralComponents/Header';
// import { useAllImagesVisible } from '@/hooks';

const MainPage: FC = () => {
  // const allImagesVisible = useAllImagesVisible();

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default MainPage;
