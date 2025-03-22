import { FC } from 'react';
import Main from '@MainPageComponents/Main';
import AnimatedPage from '@GeneralComponents/AnimatedPage';
import Footer from '@GeneralComponents/Footer';
import Header from '@GeneralComponents/Header';

const MainPage: FC = () => {
  return (
    <AnimatedPage>
      <Header />
      <Main />
      <Footer />
    </AnimatedPage>
  );
};

export default MainPage;
