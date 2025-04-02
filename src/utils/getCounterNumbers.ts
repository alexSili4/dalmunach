import { IGetCounterNumbersProps } from '@/types/funcs.types';
import { Strings } from '@/types/types';

const getCounterNumbers = ({
  maxBottles,
  ordersCount,
}: IGetCounterNumbersProps): Strings => {
  const total = maxBottles - ordersCount;
  const numbers = String(total).padStart(3, '0').split('');

  return numbers;
};

export default getCounterNumbers;
