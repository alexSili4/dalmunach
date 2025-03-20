import { IAppInitialState } from '@/types/appStore.types';

const initialState: IAppInitialState = {
  maxBottles: 0,
  ordersCount: 0,
  isLoading: false,
  error: null,
};

export default initialState;
