import { IGetIsLastIndexProps } from '@/types/funcs.types';

const getIsLastIndex = ({ index, array }: IGetIsLastIndexProps) => {
  const lastIndex = array.length - 1;
  const isLastIndex = index === lastIndex;

  return isLastIndex;
};

export default getIsLastIndex;
