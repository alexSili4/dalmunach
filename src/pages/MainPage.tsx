import { FC } from 'react';
import Main from '@MainPageComponents/Main';
import Header from '@GeneralComponents/Header';

const MainPage: FC = () => {
  // useEffect(() => {
  //   function preventDefault(event) {
  //     event.preventDefault();
  //   }

  //   function preventArrowKeys(event) {
  //     if (
  //       [
  //         'ArrowUp',
  //         'ArrowDown',
  //         'PageUp',
  //         'PageDown',
  //         'Home',
  //         'End',
  //         'Space',
  //       ].includes(event.key)
  //     ) {
  //       event.preventDefault();
  //     }
  //   }

  //   window.addEventListener('wheel', preventDefault, { passive: false });
  //   window.addEventListener('touchmove', preventDefault, { passive: false });
  //   window.addEventListener('keydown', preventArrowKeys, { passive: false });
  // });

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default MainPage;
