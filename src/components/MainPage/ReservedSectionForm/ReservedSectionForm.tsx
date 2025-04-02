import { FC, useState } from 'react';
import { regExp, Symbols } from '@/constants';
import { IErrorMessage, IReservedFormData } from '@/types/reserved.types';
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

const ReseRvedSectionForm: FC<IProps> = ({
  isInvalidEmailField,
  isInvalidPhoneField,
  isInvalidNameField,
  updateError,
  updateIsSuccess,
  updateInvalidFields,
}) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IReservedFormData>();
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
        const errorMessage = error.response?.data
          .map(({ message }: IErrorMessage) => message)
          .join(Symbols.break);
        const invalidFields = error.response?.data.map(
          ({ field }: IErrorMessage) => field
        );

        updateInvalidFields(invalidFields);
        updateError(errorMessage);
      }
    } finally {
      updateDisabled(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Container>
        <InputsWrap>
          <Input
            isInvalidField={isInvalidNameField}
            placeholder="Моє ім'я"
            settings={{
              ...register('name', {
                required: true,
              }),
            }}
          />
          <Input
            isInvalidField={isInvalidPhoneField}
            placeholder='Номер телефону'
            settings={{
              ...register('phone', {
                required: true,
                pattern: regExp.phone,
              }),
            }}
          />
          <Input
            isInvalidField={isInvalidEmailField}
            placeholder='Електронна пошта'
            settings={{
              ...register('email', {
                required: true,
                pattern: regExp.email,
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
