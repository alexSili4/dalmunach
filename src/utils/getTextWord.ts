import { IGetTextWordProps } from '@/types/funcs.types';
import getIsLastIndex from './getIsLastIndex';
import { Symbols } from '@/constants';

const getTextWord = ({ words, word, index }: IGetTextWordProps): string => {
  const isLastIndex = getIsLastIndex({ array: words, index });
  const wordWithSpace = `${word}${Symbols.space}`;
  const textWord = isLastIndex ? word : wordWithSpace;

  return textWord;
};

export default getTextWord;
