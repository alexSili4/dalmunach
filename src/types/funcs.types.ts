import { StringOrNull } from './types';

export interface IGetCounterProgressProps {
  ordersCount: number;
  maxBottles: number;
}

export type SetStringOrNullFunc = (data: StringOrNull) => void;

export type SetBooleanFunc = (data: boolean) => void;
