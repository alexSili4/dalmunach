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
  Content,
  InputsWrap,
  TitleWrap,
  PostCardImg,
  Title,
  BtnTitle,
  BtnTitleWrap,
} from './ReservedSectionForm.styled';
import Input from '@MainPageComponents/Input';
import postCard from '@/images/main/reserved/post-card-min.png';
import { useAppStore } from '@/store/store';
import { selectGetReservedInfo } from '@/store/app/selectors';

const ReseRvedSectionForm: FC<IProps> = ({ updateError }) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IReservedFormData>();
  const getReservedInfo = useAppStore(selectGetReservedInfo);

  const updateDisabled = (data: boolean) => {
    setDisabled(data);
  };

  const handleFormSubmit: SubmitHandler<IReservedFormData> = async (data) => {
    try {
      updateError(null);
      updateDisabled(true);

      await appService.reserved(data);
      await getReservedInfo();
    } catch (error) {
      if (error instanceof AxiosError && error.status === 422) {
        const errorMessage = error.response?.data
          .map(({ message }: IErrorMessage) => message)
          .join(Symbols.break);

        updateError(errorMessage);
      }
    } finally {
      updateDisabled(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Container>
        <TitleWrap>
          <AnimatedReseRvedSectionFormTitle />
          {/* <Title>Надішліть свої контактні дані для передзамовлення</Title> */}
          <PostCardImg src={postCard} alt='Фон' />
        </TitleWrap>
        <Content>
          <InputsWrap>
            <Input
              placeholder="Моє ім'я"
              settings={{
                ...register('name', {
                  required: true,
                }),
              }}
            />
            <Input
              placeholder='Номер телефону'
              settings={{
                ...register('phone', {
                  required: true,
                  pattern: regExp.phone,
                }),
              }}
            />
            <Input
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
        </Content>
      </Container>
    </Form>
  );
};

export default ReseRvedSectionForm;
