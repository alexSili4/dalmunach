import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetAppStateFunc,
  IAppState,
  SetAppStateFunc,
} from '@/types/appStore.types';
import { getReservedInfo } from './operations';
import { IReservedInfo } from '@/types/reserved.types';

const appSlice = (set: SetAppStateFunc, get: GetAppStateFunc): IAppState => ({
  ...initialState,
  getReservedInfo: async (): Promise<IReservedInfo | undefined> =>
    await getReservedInfo({
      set: setState({ set, name: 'getReservedInfo' }),
      get,
      data: undefined,
    }),
});

const params = {
  name: 'appStore',
};

const appStore = {
  store: appSlice,
  params,
};

export default appStore;
