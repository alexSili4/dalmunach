import { FC } from 'react';
import ReservedSectionForm from '@MainPageComponents/ReservedSectionForm';
import ReservedSectionFormErrorMessage from '@MainPageComponents/ReservedSectionFormErrorMessage';
import { IProps } from './ReservedSectionFormWithError.types';

const ReservedSectionFormWithError: FC<IProps> = ({
  error,
  isInvalidEmailField,
  isInvalidPhoneField,
  isInvalidNameField,
  updateError,
  updateIsSuccess,
  updateInvalidFields,
}) => {
  return (
    <>
      <ReservedSectionForm
        updateError={updateError}
        updateIsSuccess={updateIsSuccess}
        updateInvalidFields={updateInvalidFields}
        isInvalidEmailField={isInvalidEmailField}
        isInvalidPhoneField={isInvalidPhoneField}
        isInvalidNameField={isInvalidNameField}
      />
      {error && <ReservedSectionFormErrorMessage error={error} />}
    </>
  );
};

export default ReservedSectionFormWithError;
