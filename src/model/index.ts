import { Dispatch, HTMLProps } from 'react';

export type Callback<T = unknown, K = void> = (data?: T) => K;

export interface StateCall<T> {
  value: T;
  setValue?: Dispatch<React.SetStateAction<T>>;
}

export interface FormFieldProps
  extends HTMLProps<HTMLInputElement> {
  title: string;
  id: string;
  errors?: Record<string, string>;
  setValue?: (value: string) => void;
}

export enum Gender {
  male = 'Male',
  female = 'Female',
}

export interface User {
  name: string;
  age: number | null;
  email: string;
  gender: Gender | null;
  password: string;
  passwordConfirm: string;
  country: string;
  image: object | null;
  acceptTerms: boolean;
}

export interface FormSubmits {
  uncontrolled: User[];
  controlled: User[];
  isControlledChanged: boolean;
  isUnControlledChanged: boolean;

}