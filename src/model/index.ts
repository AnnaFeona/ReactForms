import { Dispatch } from 'react';

export type Callback<T = unknown, K = void> = (data?: T) => K;

export interface StateCall<T> {
  value: T;
  setValue?: Dispatch<React.SetStateAction<T>>;
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