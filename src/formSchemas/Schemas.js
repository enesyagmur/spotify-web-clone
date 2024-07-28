import * as yup from "yup";

export const schemas = yup.object().shape({
  email: yup.string().email("Geçersiz email").required("Email boş bırakılamaz"),
  password: yup
    .string()
    .required("Email boş bırakılamaz")
    .min(8, "Şifre min 8 karakter olmalı"),
});
