import * as yup from "yup";

export const LOGIN_SCHEME = yup.object({
  text: yup
    .string()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Inappropriate email")
    .required("You need email to login"),
});