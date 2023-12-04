import React, { FC } from "react";
import { FormControlProps, Gender } from "../../model";

export const FormControlRadio: FC<FormControlProps> = ({
  id,
  form,
  title,
  required,
  errors,
  register,
}) => {
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
              required={required}
              {...register(id)}
            />
            {Gender.female}
          </label>
        </div>
        <div className="error__message">
          {errors && errors[id] && <span>{errors[id]?.message}</span>}
        </div>
      </div>
    </>
  );
};
