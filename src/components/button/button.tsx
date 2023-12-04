import { FC, HTMLProps } from 'react';
import { Callback } from '../../model';

import './button.scss';

export interface ButtonProps<T=unknown> extends HTMLProps<HTMLButtonElement>  {
  onButtonClick?: Callback<T>;
}

export const Button: FC<ButtonProps> = ({ title, className, onClick, disabled }) => {
  return (
    <>
      <button className={className} onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </>
  );
};