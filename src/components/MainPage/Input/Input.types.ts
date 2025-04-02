import { InputType } from '@/types/types';

export interface IProps {
  settings: object;
  placeholder: string;
  isInvalidField: boolean;
  type?: InputType;
}

export interface IStyledInputProps {
  isInvalidField: boolean;
}

export interface IStyledContainerProps {
  isInvalidField: boolean;
}
