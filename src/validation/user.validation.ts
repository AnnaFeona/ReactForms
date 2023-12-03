import * as yup from "yup";

export const userScema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Z][a-z]*$/, "Name must start with an uppercase letter"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age should be a non-negative number"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/,
      "Password should contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character",
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  // gender: yup.string().required("Gender is required"),
  // acceptTerms: yup
  //   .boolean()
  //   .oneOf([true], "Please accept the terms and conditions"),
  image: yup
    .mixed<{ name: string; size: number }>()
    .test(
      "fileSize",
      "File size is too large (max 1 MB)",
      (value) => value && value.size <= 1048576,
    )
    .test(
      "fileType",
      "Invalid file type. Please upload a PNG or JPEG file",
      (value) => (value ? /\.(png|jpeg)$/.test(value.name) : true),
    ),
  country: yup.string().required("Country is required"),
});
