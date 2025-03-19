export interface IErrorMessage {
  field: string;
  message: string;
}

export type ErrorMessages = IErrorMessage[];

export interface IReservedFormData {
  name: string;
  phone: string;
  email: string;
}
