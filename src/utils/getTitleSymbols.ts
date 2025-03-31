import { Strings } from '@/types/types';
import getIsLastIndex from './getIsLastIndex';
import { IGetTitleSymbolsProps } from '@/types/funcs.types';
import { Symbols } from '@/constants';

const getTitleSymbols = ({
  index,
  word,
  words,
}: IGetTitleSymbolsProps): Strings => {
  const isLastIndex = getIsLastIndex({ array: words, index });
  const wordWithSpace = `${word}${Symbols.space}`;
  const targetWord = isLastIndex ? word : wordWithSpace;
  const symbols = Array.from(targetWord);

  return symbols;
};

export default getTitleSymbols;
