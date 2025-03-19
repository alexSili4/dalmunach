import { ErrorMessages, IReservedFormData } from '@/types/reserved.types';
import HttpService from './http.service';
import { AxiosResponse } from 'axios';

class AppService extends HttpService {
  constructor() {
    super();
  }
  async reserved(
    data: IReservedFormData
  ): Promise<AxiosResponse<ErrorMessages | IReservedFormData, any>> {
    const response = await this.post<
      ErrorMessages | IReservedFormData,
      IReservedFormData
    >(
      {
        url: 'order/create',
        data,
      },
      false
    );

    return response;
  }
}

const appService = new AppService();

export default appService;
