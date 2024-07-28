import * as yup from "yup";

export const RegisterSchemas = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email cannot be empty"),
  password: yup
    .string()
    .required("Password cannot be empty")
    .min(8, "Password must be at least 8 characters"),
  term: yup.boolean().required("Term cannot be empty"),
});
