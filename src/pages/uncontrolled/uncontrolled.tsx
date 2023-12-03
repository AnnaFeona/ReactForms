import { FC, FormEvent, useRef, useState } from "react";
import { FormField } from "../../components/formField/formField";
import { Button } from "../../components/button/button";
import { userScema } from "../../validation/user.validation";
import { ValidationError } from "yup";
import { FormFieldCheckbox } from "../../components/formFieldCheckbox/formFieldCheckbox";
import { FormfieldRadio } from "../../components/formFieldRadio/formFieldRadio";
import { FormFieldAutoComplete } from "../../components/formFieldAutoComplete/formFieldAutoComplete";
import { useAppDispatch } from "../../store/hooks";
import { setUnControlled } from "../../store/slices/submits.slice";
import { User } from "../../model";

export const Uncontrolled: FC = () => {
  const submit = useAppDispatch();
  const formDataRef = useRef<User>({
    name: "",
    age: null,
    email: "",
    password: "",
    passwordConfirm: "",
    gender: null,
    acceptTerms: false,
    image: null,
    country: "",
  });

  const [errs, setErrs] = useState<Record<string, string>>({});
  const formRef = useRef(null);

  const handleChange = (e: FormEvent) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    const inputValue =
      type === "checkbox"
        ? checked
        : type === "file"
        ? files && files[0]
        : value;

    formDataRef.current = {
      ...formDataRef.current,
      [name]: inputValue,
    };
    console.log(formDataRef.current);
  };

  const createTile = async (event: FormEvent) => {
    event.preventDefault();

    userScema
      .validate(formDataRef.current, { abortEarly: false })
      .then(() => {
        submit(setUnControlled(formDataRef.current));

        console.log("Form submitted:", formDataRef.current);
      })
      .catch((errors: ValidationError) => {
        const newFormErrors: Record<string, string> = {};

        errors.inner.forEach((err) => {
          if (!newFormErrors[err.path as string]) {
            newFormErrors[err.path as string] = err.message;
          }
        });
        setErrs(newFormErrors);
      });
      // console.log(formDataRef.current);

  };

  return (
    <>
      <h2 className="form_title">Form withoutControl</h2>
      <form
        id="uncontrolled"
        onSubmit={createTile}
        onChange={handleChange}
        onFocus={handleChange}
        onPaste={handleChange}
        ref={formRef}
        noValidate
      >
        <FormField
          title="Name:"
          id="name"
          required
          errors={errs}
          form="uncontrolled"
          placeholder="ex. John"
        />
        <FormField
          title="Age:"
          id="age"
          type="number"
          required
          form="uncontrolled"
          errors={errs}
        />
        <FormField
          title="Email:"
          id="email"
          type="email"
          required
          errors={errs}
        />
        <FormField
          title="Password:"
          id="password"
          type="password"
          required
          errors={errs}
        />
        <FormField
          title="ConfirmPassword:"
          id="confirmPassword"
          type="password"
          required
          errors={errs}
        />
        <FormfieldRadio title="Gender:" id="gender" required errors={errs} />
        <FormFieldAutoComplete
          title="Country:"
          id="country"
          required
          errors={errs}
          form="uncontrolled"
        />
        <FormField
          title="Image:"
          id="image"
          type="file"
          required
          errors={errs}
        />
        <FormFieldCheckbox
          title="accept"
          id="acceptTerms"
          required
          errors={errs}
        />

        <Button type="submit" title="Submit" className="submit__btn" />
      </form>
    </>
  );
};
