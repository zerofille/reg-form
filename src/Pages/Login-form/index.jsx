import styles from "./style.module.scss";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LOGIN_SCHEME } from "../../Utils/Validation-schemas";
import cx from "classnames";
const initialValues = {
  login: "",
  password: "",
  isRemembered: false,
};

function LoginForm(props) {
  const submitForm = (values, formikBag) => formikBag.resetForm();

  //   const validStyle = ()=>{
  // cx({
  //   [styles.field]:!
  // })
  //   }
  return (
    <section className={styles.wholeSection}>
      <div className={styles.header}>
        <a className={styles.logo} href="#">
          <img src="https://www.squadhelp.com/img/logo.png" />
        </a>
        <button className={styles.signUpBtn}>Signup</button>
      </div>

      <Formik
        onSubmit={submitForm}
        className={styles.formik}
        validationSchema={LOGIN_SCHEME}
        initialValues={initialValues}
        validateOnChange={false}
      >
        {(formikProps) => {
          console.log(formikProps);

          const stylesValid = cx(styles.field, {
            [styles.field]: !formikProps.errors.login,
            [styles.invalidField]:
              formikProps.errors.login && formikProps.touched,
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
              <ErrorMessage name="login">
                {(message) => <div className={styles.error}>{message}</div>}
              </ErrorMessage>
              <Field
                className={styles.field}
                name="password"
                type="password"
                placeholder="Password"
              ></Field>
              <div className={styles.afterFormWrapper}>
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
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default LoginForm;
