import { FC, useEffect, useState } from "react";

import "./formField.scss";
import { FormFieldProps } from "../../model";

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
