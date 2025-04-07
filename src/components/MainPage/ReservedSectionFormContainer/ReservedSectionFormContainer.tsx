import { FC, useState } from 'react';
import { StringOrNull, StringsOrNull } from '@/types/types';
import ReservedSectionFormWithError from '@MainPageComponents/ReservedSectionFormWithError';
import {
  Container,
  PostCardImg,
  TitleWrap,
} from './ReservedSectionFormContainer.styled';
import { IProps } from './ReservedSectionFormContainer.types';
import ReservedSectionFormSuccessMessage from '@MainPageComponents/ReservedSectionFormSuccessMessage';
import postCard from '@/images/main/reserved/post-card-min.png';
import AnimatedReservedSectionFormTitle from '@AnimatedComponents/AnimatedReseRvedSectionFormTitle';

const ReservedSectionFormContainer: FC<IProps> = ({ inView, translateY }) => {
  const [error, setError] = useState<StringOrNull>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [invalidFields, setInvalidFields] = useState<StringsOrNull>(null);

  const isInvalidNameField = invalidFields
    ? invalidFields.includes('name')
    : false;
  const isInvalidPhoneField = invalidFields
    ? invalidFields.includes('phone')
    : false;
  const isInvalidEmailField = invalidFields
    ? invalidFields.includes('email')
    : false;

  const updateError = (data: StringOrNull) => {
    setError(data);
  };

  const updateIsSuccess = (data: boolean) => {
    setIsSuccess(data);
  };

  const updateInvalidFields = (data: StringsOrNull) => {
    setInvalidFields(data);
  };

  return (
    <Container style={{ translateY }}>
      <TitleWrap>
        <AnimatedReservedSectionFormTitle
          text='Надішліть свої контактні дані для передзамовлення'
          inView={inView}
        />
        <PostCardImg src={postCard} alt='Фон' />
      </TitleWrap>
      {isSuccess ? (
        <ReservedSectionFormSuccessMessage />
      ) : (
        <ReservedSectionFormWithError
          updateIsSuccess={updateIsSuccess}
          error={error}
          updateError={updateError}
          updateInvalidFields={updateInvalidFields}
          isInvalidNameField={isInvalidNameField}
          isInvalidPhoneField={isInvalidPhoneField}
          isInvalidEmailField={isInvalidEmailField}
        />
      )}
    </Container>
  );
};

export default ReservedSectionFormContainer;
