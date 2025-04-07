import { theme } from '@/constants';
import useMediaQuery from './useMediaQuery';

const useIsDesk = (): boolean => {
  const isDesk = useMediaQuery(theme.breakpoints.desktop);

  return isDesk;
};

export default useIsDesk;
