import * as yup from "yup";

export const LOGIN_SCHEME = yup.object({
  login: yup
    .string()
    .matches(/^[a-z0-9_-]{3,15}$/, "Inappropriate login")
    .required("Login is a required fieled"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Password must contain 8 - 32 characters in upper- and lower- case, number and special character"
    )
    .required("Password is a required fieled"),
});
export const SIGN_IN_SCHEME = yup.object({
  first_name: yup
    .string()
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      "Inappropriate first name"
    )
    .required("First name is a required fieled"),
  last_name: yup
    .string()
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
      "Inappropriate last name"
    )
    .required("Last name is a required fieled"),
  display_name: yup
    .string()
    .matches(/^[a-z0-9_-]{3,15}$/, "Inappropriate display name")
    .required("Display name is a required fieled"),
  email: yup
    .string()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Inappropriate email")
    .required("Display name is a required fieled"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Password must contain 8 - 32 characters in upper- and lower- case, number and special character"
    )
    .required("Password is a required fieled"),
});
