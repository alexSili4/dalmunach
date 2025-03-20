import { IGetCounterProgressProps } from '@/types/funcs.types';

const getCounterProgress = ({
  ordersCount,
  maxBottles,
}: IGetCounterProgressProps): number => {
  const progress = (ordersCount / maxBottles) * 100;

  return progress;
};

export default getCounterProgress;
