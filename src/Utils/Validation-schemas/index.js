import * as yup from "yup";

export const LOGIN_SCHEME = yup.object({
  login: yup
    .string()
    .matches(/^[a-z0-9_-]{3,15}$/, "Inappropriate login")
    .required("You need to fill in all fields to login"),
});