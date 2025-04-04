import { Symbols } from '@/constants';
import { IGetInvalidFormFields } from '@/types/funcs.types';
import { ErrorMessages, IErrorMessage } from '@/types/reserved.types';

const getInvalidFormFields = (errors: ErrorMessages): IGetInvalidFormFields => {
  const errorMessage = errors
    .map(({ message }: IErrorMessage) => message)
    .join(Symbols.break);
  const invalidFields = errors.map(({ field }: IErrorMessage) => field);

  return { errorMessage, invalidFields };
};

export default getInvalidFormFields;
