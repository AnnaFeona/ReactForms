import { FC } from "react";

import { FormControlProps } from "../../model";

export const FormControlCheckbox: FC<FormControlProps> = ({
  title,
  id,
  value,
  errors,
  form,
  required,
  register,
}) => {
  return (
    <>
      <div className="formField">
        <legend>Accept terms & conditions</legend>
        <div className="input__container">
          <label htmlFor={id}>
            <input
              {...register(id)}
              form={form}
              type="checkbox"
              id={id}
              value={value}
              required={required}
            />
            {title}
          </label>
        </div>

        <div className="error__message">
          {errors && errors[id] && <span>{errors[id]?.message}</span>}
        </div>
      </div>
    </>
  );
};
