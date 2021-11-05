import styles from "./style.module.scss";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LOGIN_SCHEME } from "../../Utils/Validation-schemas";
import cx from "classnames";
function SigInForm() {
  return (
    <section className={styles.wholeSection}>
      <div className={styles.header}>
        <a className={styles.logo} href="/">
          <img src="https://www.squadhelp.com/img/logo.png" />
        </a>
        <a className={styles.logBtn} href="/login">
          Login
        </a>
      </div>
      <Formik
        className={styles.formik}
        validationSchema={LOGIN_SCHEME}
        validateOnChange={false}
      >
        {(formikProps) => {
          console.log(formikProps);

          return (
            <Form className={styles.loginForm}>
              <h1 className={styles.formHeading}>CREATE AN ACCOUNT</h1>
              <div className={styles.allFieldsWrap}>
                <div className={styles.pairingFields}>
                <Field  className={styles.regForm} name="login" placeholder="Your login"></Field>
                <Field name="password" placeholder="Password"></Field>
                </div>
                <div className={styles.pairingFields}>
                <Field name="password" placeholder="Password"></Field>
                <Field name="password" placeholder="Password"></Field>
                </div>
                <div className={styles.pairingFields}>
                <Field name="password" placeholder="Password"></Field>
                <Field name="password" placeholder="Password"></Field>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
export default SigInForm;
