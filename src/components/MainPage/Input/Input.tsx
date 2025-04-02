import { FC } from 'react';
import { IProps } from './Input.types';
import { Container, StyledInput } from './Input.styled';
import ErrorMarker from '@/icons/reserved/error-marker.svg?react';

const Input: FC<IProps> = ({ settings, placeholder, type, isInvalidField }) => {
  return (
    <Container isInvalidField={isInvalidField}>
      <StyledInput
        type={type}
        placeholder={placeholder}
        isInvalidField={isInvalidField}
        {...settings}
      />
      <ErrorMarker />
    </Container>
  );
};

export default Input;
