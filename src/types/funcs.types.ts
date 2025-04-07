import { StringOrNull, StringsOrNull, Strings } from './types';

export interface IGetCounterProgressProps {
  ordersCount: number;
  maxBottles: number;
}

export type SetStringsOrNullFunc = (data: StringsOrNull) => void;

export type SetStringOrNullFunc = (data: StringOrNull) => void;

export type SetNumberFunc = (data: number) => void;

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

export interface IGetCounterNumbersProps {
  maxBottles: number;
  ordersCount: number;
}

export interface IGetInvalidFormFields {
  errorMessage: string;
  invalidFields: Strings;
}
