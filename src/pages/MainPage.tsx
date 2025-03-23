import { FC } from 'react';
import Main from '@MainPageComponents/Main';
import AnimatedPage from '@GeneralComponents/AnimatedPage';

const MainPage: FC = () => {
  return (
    <AnimatedPage>
      <Main />
    </AnimatedPage>
  );
};

export default MainPage;
