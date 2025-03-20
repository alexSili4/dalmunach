import { IReservedInfo } from './reserved.types';
import { GetStateFunc, SetStateFunc } from './store.types';
import { StringOrNull } from './types';

export interface IAppInitialState {
  ordersCount: number;
  maxBottles: number;
  isLoading: boolean;
  error: StringOrNull;
}

export interface IAppState extends IAppInitialState {
  getReservedInfo: () => Promise<IReservedInfo | undefined>;
}

export type GetAppStateFunc = GetStateFunc<IAppState>;

export type SetAppStateFunc = SetStateFunc<IAppState>;

export interface IGetReservedInfoOperationProps {
  set: SetAppStateFunc;
}
