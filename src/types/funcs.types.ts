import { StringOrNull, Strings } from './types';

export interface IGetCounterProgressProps {
  ordersCount: number;
  maxBottles: number;
}

export type SetStringOrNullFunc = (data: StringOrNull) => void;

export type SetBooleanFunc = (data: boolean) => void;

export type Func = () => void;

export interface IGetIsLastIndexProps {
  index: number;
  array: Array<any>;
}

export interface IGetTitleSymbolsProps {
  index: number;
  word: string;
  words: Strings;
}

export interface IGetTextWordProps {
  words: Strings;
  word: string;
  index: number;
}
