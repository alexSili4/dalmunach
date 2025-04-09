import { FC, useEffect, useState } from 'react';
import { FormErrorMessages, GeneralSettings, regExp } from '@/constants';
import { IReservedFormData } from '@/types/reserved.types';
import { AxiosError } from 'axios';
import appService from '@/services/app.service';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProps } from './ReservedSectionForm.types';
import {
  Form,
  Button,
  Container,
  InputsWrap,
  BtnTitle,
  BtnTitleWrap,
} from './ReservedSectionForm.styled';
import Input from '@MainPageComponents/Input';
import { useAppStore } from '@/store/store';
import { selectGetReservedInfo } from '@/store/app/selectors';
import { getInvalidFormFields, getReservedFormErrorMessages } from '@/utils';

const ReseRvedSectionForm: FC<IProps> = ({
  isInvalidEmailField,
  isInvalidPhoneField,
  isInvalidNameField,
  updateError,
  updateIsSuccess,
  updateInvalidFields,
}) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IReservedFormData>();
  const getReservedInfo = useAppStore(selectGetReservedInfo);

  const updateDisabled = (data: boolean) => {
    setDisabled(data);
  };

  const handleFormSubmit: SubmitHandler<IReservedFormData> = async (data) => {
    try {
      updateInvalidFields(null);
      updateError(null);
      updateDisabled(true);

      await appService.reserved(data);
      updateIsSuccess(true);
      await getReservedInfo();
    } catch (error) {
      if (error instanceof AxiosError && error.status === 422) {
        const errors = error.response?.data;
        const { errorMessage, invalidFields } = getInvalidFormFields(errors);

        updateInvalidFields(invalidFields);
        updateError(errorMessage);
      }
    } finally {
      updateDisabled(false);
    }
  };

  useEffect(() => {
    const errorMessages = getReservedFormErrorMessages(errors);

    if (errorMessages.length) {
      const { errorMessage, invalidFields } =
        getInvalidFormFields(errorMessages);

      updateInvalidFields(invalidFields);
      updateError(errorMessage);
    }
  }, [isSubmitting, errors]);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Container>
        <InputsWrap>
          <Input
            isInvalidField={isInvalidNameField}
            placeholder="Ім'я та прізвище"
            settings={{
              ...register('name', {
                required: {
                  message: FormErrorMessages.nameReqErr,
                  value: true,
                },
              }),
            }}
          />
          <Input
            isInvalidField={isInvalidPhoneField}
            placeholder='Номер телефону'
            settings={{
              ...register('phone', {
                required: {
                  value: true,
                  message: FormErrorMessages.phoneReqErr,
                },
                pattern: {
                  value: regExp.phone,
                  message: FormErrorMessages.phoneRegExpErr,
                },
                minLength: {
                  value: GeneralSettings.phoneMinLength,
                  message: FormErrorMessages.phoneMinLengthErr,
                },
              }),
            }}
          />
          <Input
            isInvalidField={isInvalidEmailField}
            placeholder='Електронна пошта'
            settings={{
              ...register('email', {
                required: {
                  value: true,
                  message: FormErrorMessages.emailReqErr,
                },
                pattern: {
                  value: regExp.email,
                  message: FormErrorMessages.emailRegExpErr,
                },
              }),
            }}
          />
        </InputsWrap>
        <Button type='submit' disabled={disabled}>
          <BtnTitleWrap>
            <BtnTitle>ПЕРЕДЗАМОВИТИ</BtnTitle>
          </BtnTitleWrap>
        </Button>
      </Container>
    </Form>
  );
};

export default ReseRvedSectionForm;
