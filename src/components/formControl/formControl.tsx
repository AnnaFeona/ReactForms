import { FC } from "react";
import { FormControlProps } from "../../model";

export const FormControl: FC<FormControlProps> = ({
  title,
  type = "text",
  id,
  value,
  form,
  required,
  placeholder,
  errors,
  register,
}) => {
  return (
    <>
      <div className="formField">
        <label htmlFor={id}>{title}</label>
        <input
          className="formField__input"
          form={form}
          type={type}
          id={id}
          value={value}
          required={required}
          placeholder={placeholder}
          {...register(id)}
        />
        <div className="error__message">
          {errors && errors[id] && <span>{errors[id]?.message}</span>}
        </div>
      </div>
    </>
  );
};
