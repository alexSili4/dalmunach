import {
  SetBooleanFunc,
  SetStringOrNullFunc,
  SetStringsOrNullFunc,
} from '@/types/funcs.types';

export interface IProps {
  isInvalidEmailField: boolean;
  isInvalidPhoneField: boolean;
  isInvalidNameField: boolean;
  updateError: SetStringOrNullFunc;
  updateIsSuccess: SetBooleanFunc;
  updateInvalidFields: SetStringsOrNullFunc;
}
