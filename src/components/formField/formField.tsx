import { FC, HTMLProps, useEffect, useState } from "react";
import { Callback } from "../../model";

import "./formField.scss";

export interface FormFieldProps<T = unknown>
  extends HTMLProps<HTMLInputElement> {
  title: string;
  id: string;
  handleInput?: Callback<T>;
  validateInput?: Callback<T>;
  errors?: Record<string, string>;
}

export const FormField: FC<FormFieldProps> = ({
  title,
  type = "text",
  name,
  id,
  value,
  errors,
  form,
  required
}) => {
  const [err, setErr] = useState("");
  useEffect(() => {
    if (errors) {
      setErr(errors[id]);
      console.log(err);
    }
  }, [errors, id, err]);
  return (
    <>
      <div className="formField">
        <label htmlFor={id}>{title}</label>
        <input
          form={form}
          type={type}
          id={id}
          name={name}
          value={value}
          required={required}
        />
        <div className="error__message">
          {err && <span>{err}</span>}
        </div>
      </div>
    </>
  );
};
