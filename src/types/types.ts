import { MouseEvent } from 'react';
import { SetBooleanFunc } from './funcs.types';

// events
export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// other
export type NumberOrNull = number | null;

export type StringOrNull = string | null;

export type InputType = 'text' | 'email' | 'tel';

export interface IRegExp {
  email: RegExp;
  phone: RegExp;
}

export interface IWarningPageOutletContext {
  updateIsLegalDrinkingAgeUser: SetBooleanFunc;
}

export interface IOutletContext extends IWarningPageOutletContext {}
