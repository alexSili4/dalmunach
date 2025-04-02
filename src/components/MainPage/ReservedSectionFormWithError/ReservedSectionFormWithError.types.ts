import {
  SetBooleanFunc,
  SetStringOrNullFunc,
  SetStringsOrNullFunc,
} from '@/types/funcs.types';
import { StringOrNull } from '@/types/types';

export interface IProps {
  error: StringOrNull;
  isInvalidEmailField: boolean;
  isInvalidPhoneField: boolean;
  isInvalidNameField: boolean;
  updateError: SetStringOrNullFunc;
  updateIsSuccess: SetBooleanFunc;
  updateInvalidFields: SetStringsOrNullFunc;
}
