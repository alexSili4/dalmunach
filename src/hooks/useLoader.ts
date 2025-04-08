import { useEffect } from 'react';
import useAllImagesVisible from './useAllImagesVisible';
import { disableScroll, unDisableScroll } from '@/utils';
import { RefDivObject } from '@/types/types';

const useLoader = (sectionRef: RefDivObject): boolean => {
  const allImagesVisible = useAllImagesVisible(sectionRef);

  useEffect(() => {
    disableScroll();
  }, []);

  useEffect(() => {
    if (allImagesVisible) {
      unDisableScroll();
    }
  }, [allImagesVisible]);

  return allImagesVisible;
};

export default useLoader;
