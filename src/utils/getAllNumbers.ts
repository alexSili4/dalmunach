import { Numbers } from '@/types/types';

const getAllNumbers = (): Numbers => {
  const allNumbers = Array.from({ length: 10 }, (_, i) => 9 - i);

  return allNumbers;
};

export default getAllNumbers;
