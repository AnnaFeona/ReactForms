import { FC, useEffect, useState } from "react";

import "./formFieldCheckbox.scss";
import { FormFieldProps } from "../../model";

export const FormFieldCheckbox: FC<FormFieldProps> = ({
  title,
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
    }
  }, [errors, id, err]);
  return (
    <>
      <div className="formField">
        <legend>Accept terms & conditions</legend>
        <div className="input__container">
        <input
          form={form}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          required={required}
        />
        <label htmlFor={id}>{title}</label>
        </div>

        <div className="error__message">
          {err && <span>{err}</span>}
        </div>
      </div>
    </>
  );
};
