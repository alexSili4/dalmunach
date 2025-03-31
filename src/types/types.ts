import { MouseEvent, RefObject } from 'react';
import { SetBooleanFunc } from './funcs.types';
import { MotionValue } from 'framer-motion';

// events
export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// other
export type Strings = Array<string>;

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

export type MotionValueNumber = MotionValue<number>;

export type RefDivObject = RefObject<HTMLDivElement>;
