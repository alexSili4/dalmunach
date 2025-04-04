import { ErrorMessages, IReservedFormData } from '@/types/reserved.types';
import { FieldErrors } from 'react-hook-form';

const getReservedFormErrorMessages = (
  errors: FieldErrors<IReservedFormData>
): ErrorMessages => {
  const formErrors = Object.entries(errors);
  const errorMessages = formErrors.map(([key, value]) => {
    const message = value.message ?? '';

    return {
      field: key,
      message,
    };
  });

  return errorMessages;
};

export default getReservedFormErrorMessages;
