import { IGetCounterProgressProps } from '@/types/funcs.types';

const getCounterProgress = ({
  current,
  total,
}: IGetCounterProgressProps): number => {
  const progress = (current / total) * 100;

  return progress;
};

export default getCounterProgress;
