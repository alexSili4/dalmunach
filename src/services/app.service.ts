import {
  ErrorMessages,
  IReservedFormData,
  IReservedInfo,
} from '@/types/reserved.types';
import HttpService from './http.service';

class AppService extends HttpService {
  constructor() {
    super();
  }

  async getReservedInfo(): Promise<IReservedInfo> {
    const response = await this.get<IReservedInfo>(
      {
        url: 'settings/all',
      },
      false
    );

    return response.data;
  }

  async reserved(
    data: IReservedFormData
  ): Promise<ErrorMessages | IReservedFormData> {
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

    return response.data;
  }
}

const appService = new AppService();

export default appService;
