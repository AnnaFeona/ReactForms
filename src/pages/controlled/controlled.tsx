import { FC } from "react";
import { Button } from "../../components/button/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../store/hooks";
import { User, UserControlled } from "../../model";
import { toBase64 } from "../../utils";
import { useNavigate } from "react-router-dom";
import { FormControl } from "../../components/formControl/formControl";
import { FormControlAutoComplete } from "../../components/formControlAutocomplete/formControlAutocomplete";
import { FormControlRadio } from "../../components/formControlRadio/formControlRadio";
import { FormControlCheckbox } from "../../components/formControlCheckbox/formControlCheckbox";
import { ObjectSchema } from "yup";
import { userControllScema } from "../../validation/userControll.validation";
import { useForm } from "react-hook-form";
import { setControlled } from "../../store/slices/submits.slice";

export const Controlled: FC = () => {
  const navigate = useNavigate();
  const submit = useAppDispatch();
  const form = useForm<UserControlled>({
    resolver: yupResolver<UserControlled>(
      userControllScema as ObjectSchema<UserControlled>,
    ),
    mode: "onTouched",
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isDirty},
  } = form;

  const createTile = async (data: UserControlled) => {
    const newData = { ...data };
    newData.image = (await toBase64((data.image as FileList)[0])) as string;

    submit(setControlled(newData as User));
    navigate('/');
  };

  return (
    <>
      <h2 className="form_title">Form with Control</h2>
      <form id="controlled" onSubmit={handleSubmit(createTile)} noValidate>
        <FormControl
          title="Name:"
          id="name"
          errors={errors}
          form="controlled"
          placeholder="ex. John"
          register={register}
        />
        <FormControl
          title="Age:"
          id="age"
          type="number"
          form="controlled"
          register={register}
          errors={errors}
        />
        <FormControl
          title="Email:"
          id="email"
          type="email"
          register={register}
          errors={errors}
        />
        <FormControl
          register={register}
          title="Password:"
          id="password"
          type="password"
          form="controlled"
          errors={errors}
        />
        <FormControl
          register={register}
          title="ConfirmPassword:"
          id="passwordConfirm"
          type="password"
          form="controlled"
          errors={errors}
        />
        <FormControlRadio register={register} title="Gender:" id="gender" />
        <FormControlAutoComplete
          register={register}
          title="Country:"
          id="country"
          required
          errors={errors}
          form="controlled"
          setValue={setValue}
        />
        <FormControl
          register={register}
          title="Image:"
          id="image"
          type="file"
          required
          form="controlled"
          errors={errors}
        />
        <FormControlCheckbox
          title="accept"
          id="acceptTerms"
          required
          form="controlled"
          errors={errors}
          register={register}
        />

        <Button
          type="submit"
          title="Submit"
          className="submit__btn"
          disabled={!isDirty && !isValid}
        />
      </form>
    </>
  );
};
