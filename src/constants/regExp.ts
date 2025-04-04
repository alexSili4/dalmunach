import { IRegExp } from '@/types/types';

const regExp: IRegExp = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[\d+\-()\s]+$/,
};

export default regExp;
