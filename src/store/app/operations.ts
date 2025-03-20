import appService from '@/services/app.service';
import operationWrapper from './operationWrapper';
import { IGetReservedInfoOperationProps } from '@/types/appStore.types';
import { IReservedInfo } from '@/types/reserved.types';

const getReservedInfoOperation = async ({
  set,
}: IGetReservedInfoOperationProps): Promise<IReservedInfo | undefined> => {
  const response = await appService.getReservedInfo();
  set({
    maxBottles: response.max_bottles,
    ordersCount: response.orders_count,
  });

  return response;
};

export const getReservedInfo = operationWrapper(getReservedInfoOperation);
