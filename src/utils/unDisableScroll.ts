import preventArrowKeys from './preventArrowKeys';
import preventDefault from './preventDefault';

const unDisableScroll = () => {
  window.removeEventListener('wheel', preventDefault);
  window.removeEventListener('touchmove', preventDefault);
  window.removeEventListener('keydown', preventArrowKeys);
};

export default unDisableScroll;
