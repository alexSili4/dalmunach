import { StringOrNull } from './types';

export interface IGetCounterProgressProps {
  current: number;
  total: number;
}

export type SetStringOrNullFunc = (data: StringOrNull) => void;
