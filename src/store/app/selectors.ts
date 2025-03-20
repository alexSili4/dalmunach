import { IAppState } from '@/types/appStore.types';

export const selectMaxBottles = (state: IAppState) => state.maxBottles;

export const selectOrdersCount = (state: IAppState) => state.ordersCount;

export const selectGetReservedInfo = (state: IAppState) =>
  state.getReservedInfo;
