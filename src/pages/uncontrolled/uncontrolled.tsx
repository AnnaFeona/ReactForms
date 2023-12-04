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
import { toBase64 } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Uncontrolled: FC = () => {
  const navigate = useNavigate();
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
  };

  const createTile = async (event: FormEvent) => {
    event.preventDefault();

    userScema
      .validate(formDataRef.current, { abortEarly: false })
      .then(async () => {
        const newImage = await toBase64(formDataRef.current.image as File);
        const submittedData = {...formDataRef.current};
        submittedData.image = newImage as string;

        submit(setUnControlled(submittedData));
        navigate('/');
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

  };

  return (
    <>
      <h2 className="form_title">Form withoutControl</h2>
      <form
        id="uncontrolled"
        onSubmit={createTile}
        onChange={handleChange}
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
          id="passwordConfirm"
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
