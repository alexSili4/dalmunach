import { FC, useState } from 'react';
import ReservedSectionFormErrorMessage from '@MainPageComponents/ReservedSectionFormErrorMessage';
import { StringOrNull } from '@/types/types';
import ReservedSectionForm from '@MainPageComponents/ReservedSectionForm';
import { Container } from './ReservedSectionFormContainer.styled';
import { IProps } from './ReservedSectionFormContainer.types';

const ReservedSectionFormContainer: FC<IProps> = ({ inView }) => {
  const [error, setError] = useState<StringOrNull>(null);

  const updateError = (data: StringOrNull) => {
    setError(data);
  };

  return (
    <Container>
      <ReservedSectionForm updateError={updateError} inView={inView} />
      {error && <ReservedSectionFormErrorMessage error={error} />}
    </Container>
  );
};

export default ReservedSectionFormContainer;
