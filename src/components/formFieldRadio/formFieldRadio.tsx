import React, { FC, useEffect, useState } from "react";
import { FormFieldProps, Gender } from "../../model";

export const FormfieldRadio: FC<FormFieldProps> = ({
  id,
  form,
  title,
  required,
  errors,
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
        <div className="input__container">
          <label>
            <input
              type="radio"
              value={Gender.male}
              form={form}
              id={id}
              name={id}
              required={required}
            />
            {Gender.male}
          </label>
          <label>
            <input
              type="radio"
              value={Gender.female}
              form={form}
              id={id}
              name={id}
              required={required}
            />
            {Gender.female}
          </label>
        </div>
        <div className="error__message">{err && <span>{err}</span>}</div>
      </div>
    </>
  );
};
