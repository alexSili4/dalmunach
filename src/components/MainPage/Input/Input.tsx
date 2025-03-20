import { FC } from 'react';
import { IProps } from './Input.types';
import { StyledInput } from './Input.styled';

const Input: FC<IProps> = ({ settings, placeholder, type }) => {
  return <StyledInput type={type} placeholder={placeholder} {...settings} />;
};

export default Input;
