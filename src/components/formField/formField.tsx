import { FC, useEffect, useState } from "react";

import "./formField.scss";
import { FormFieldProps } from "../../model";

export const FormField: FC<FormFieldProps> = ({
  title,
  type = "text",
  id,
  value,
  errors,
  form,
  required,
  placeholder
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
        <label htmlFor={id}>{title}</label>
        <input
          className="formField__input"
          form={form}
          type={type}
          id={id}
          name={id}
          value={value}
          required={required}
          placeholder={placeholder}
        />
        <div className="error__message">{err && <span>{err}</span>}</div>
      </div>
    </>
  );
};
