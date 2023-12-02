import { Dispatch } from 'react';

export type Callback<T = unknown, K = void> = (data?: T) => K;

export interface StateCall<T> {
  value: T;
  setValue?: Dispatch<React.SetStateAction<T>>;
}