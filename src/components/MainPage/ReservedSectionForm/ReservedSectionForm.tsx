import { FC } from 'react';
import { Symbols } from '@/constants';
import { IErrorMessage, IReservedFormData } from '@/types/reserved.types';
import { AxiosError } from 'axios';
import appService from '@/services/app.service';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProps } from './ReservedSectionForm.types';

const ReseRvedSectionForm: FC<IProps> = ({ updateError }) => {
  const { register, handleSubmit } = useForm<IReservedFormData>();

  const handleFormSubmit: SubmitHandler<IReservedFormData> = async (data) => {
    try {
      updateError(null);

      const response = await appService.reserved(data);

      console.log(response);
    } catch (error) {
      if (error instanceof AxiosError && error.status === 422) {
        const errorMessage = error.response?.data
          .map(({ message }: IErrorMessage) => message)
          .join(Symbols.newLine);

        updateError(errorMessage);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        title='Код переможця*'
        settings={{
          ...register('code', {
            required: true,
          }),
        }}
        desc='* Шукай у застосунку Chroma Legends, якщо твій клан увійшов до ТОП-3 кланів за результатами турніру.'
      />
    </Form>
  );
};

export default ReseRvedSectionForm;
