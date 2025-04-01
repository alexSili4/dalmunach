import { IUseBottleImgOpacityProps } from '@/types/hooks.types';
import { MotionValueNumber } from '@/types/types';
import { useTransform } from 'framer-motion';

const useBottleImgOpacity = ({
  index,
  activeIndex,
}: IUseBottleImgOpacityProps): MotionValueNumber => {
  const getCurrentOpacity = (value: number): number => {
    const roundValue = Math.round(value);
    const isTargetIndex = roundValue === index;
    const opacity = isTargetIndex ? 1 : 0;

    return opacity;
  };

  const opacity = useTransform(activeIndex, getCurrentOpacity);

  return opacity;
};

export default useBottleImgOpacity;
