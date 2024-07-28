import * as yup from "yup";

export const loginSchemas = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email cannot be empty"),
  password: yup
    .string()
    .required("Password cannot be empty")
    .min(8, "The password must be at least 8 characters"),
});
