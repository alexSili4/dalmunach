import { IRegExp } from '@/types/types';

const regExp: IRegExp = {
  email: /^[-?\w.?!#$&'-~%?]+@\w+\.{1}\w{2,}$/,
  phone: /^[\d+\-()\s]+$/,
};

export default regExp;
