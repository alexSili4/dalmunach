import { FC } from 'react';
import { IProps } from './ReservedSectionFormErrorMessage.types';
import { Error } from './ReservedSectionFormErrorMessage.styled';

const ReservedSectionFormErrorMessage: FC<IProps> = ({ error }) => {
  return <Error dangerouslySetInnerHTML={{ __html: error }}></Error>;
};

export default ReservedSectionFormErrorMessage;
