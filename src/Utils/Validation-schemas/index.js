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
