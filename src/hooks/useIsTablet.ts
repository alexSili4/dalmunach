import { theme } from '@/constants';
import useMediaQuery from './useMediaQuery';

const useIsTablet = (): boolean => {
  const isTablet = useMediaQuery(theme.breakpoints.tablet);

  return isTablet;
};

export default useIsTablet;
