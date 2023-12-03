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
}

export enum Gender {
  male = 'Male',
  female = 'Female',
}

export interface User {
  name: string;
  age: number;
  email: string;
  gender: Gender;
  password: string;
  passwordConfirm: string;
  country: string;
  image: object;
  terms: boolean;
}