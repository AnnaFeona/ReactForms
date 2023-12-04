import { Dispatch, HTMLProps } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export type Callback<T = unknown, K = void> = (data?: T) => K;

export interface StateCall<T> {
  value: T;
  setValue?: Dispatch<React.SetStateAction<T>>;
}

export interface FormFieldProps extends HTMLProps<HTMLInputElement> {
  title: string;
  id: string;
  errors?: Record<string, string>;
  setValue?: (value: string) => void;
}

export type FormControlFields = "name" | "age" | "email" | "gender" | "password" | "passwordConfirm" | "country" | "image" | "acceptTerms";

export interface FormControlProps extends HTMLProps<HTMLInputElement> {
  title: string;
  id: FormControlFields;
  errors?: FieldErrors<UserControlled>;
  register: UseFormRegister<UserControlled>;
  setValue?: UseFormSetValue<UserControlled>
}

export enum Gender {
  male = "Male",
  female = "Female",
}

export interface User {
  name: string;
  age: number | null;
  email: string;
  gender: Gender | null;
  password: string;
  passwordConfirm: string;
  country: string;
  image: File | string | null;
  acceptTerms: boolean;
}

export interface UserControlled {
  name: string;
  age: number | null;
  email: string;
  gender: Gender | null;
  password: string;
  passwordConfirm: string;
  country: string;
  image: FileList | string | null;
  acceptTerms: boolean;
}

export interface FormSubmits {
  uncontrolled: User[];
  controlled: User[];
  isControlledChanged: boolean;
  isUnControlledChanged: boolean;
}
