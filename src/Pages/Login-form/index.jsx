import styles from "./style.module.scss";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LOGIN_SCHEME } from "../../Utils/Validation-schemas";
import cx from "classnames";
import ErrorMes from "../../Components/ErrorMessage";

const initialValues = {
  login: "",
  password: "",
  isRemembered: false,
  isShownPassword: false,
};

function LoginForm(props) {
  const [passwordState, setPasswordState] = useState(false);
  const submitForm = (values, formikBag) => formikBag.resetForm();
  const changePasswordState = () => {
    setPasswordState(!passwordState);
  };

  return (
    <section className={styles.wholeSection}>
      <Formik
        onSubmit={submitForm}
        className={styles.formik}
        validationSchema={LOGIN_SCHEME}
        initialValues={initialValues}
        validateOnChange={false}
      >
        {(formikProps) => {
          const stylesValid = cx(styles.field, {
            [styles.field]: !formikProps.errors.login,
            [styles.invalidField]:
              formikProps.errors.login && formikProps.touched.login,
          });
          const stylesValid2 = cx(styles.field, {
            [styles.field]: !formikProps.errors.password,
            [styles.invalidField]:
              formikProps.errors.password && formikProps.touched.password,
          });

          return (
            <Form className={styles.loginForm}>
              <h1 className={styles.formHeading}>LOGIN TO YOUR ACCOUNT</h1>
              <Field
                className={stylesValid}
                name="login"
                type="text"
                placeholder="Your login"
              ></Field>

              <Field
                className={stylesValid2}
                name="password"
                type={passwordState ? "text" : "password"}
                placeholder="Password"
              ></Field>

              <div className={styles.afterFormWrapper}>
                <div className={styles.checkbox}>
                  <Field
                    type="checkbox"
                    onChange={changePasswordState}
                    checked={passwordState}
                    name="isShownPassword"
                  />{" "}
                  <p className={styles.checkboxText}>Show password</p>{" "}
                </div>
                <div className={styles.checkbox}>
                  <Field type="checkbox" name="isRemembered" />{" "}
                  <p className={styles.checkboxText}>Remember me</p>{" "}
                </div>

                <div>
                  <a className={styles.passwordLink} href="#">
                    Forgot pasword
                  </a>
                </div>
              </div>
              <button className={styles.logBtn} type="submit">
                LOGIN
              </button>

              <ErrorMes name="login" />
              <ErrorMes name="password" />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default LoginForm;
