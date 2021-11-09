import styles from "./style.module.scss";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SIGN_IN_SCHEME } from "../../Utils/Validation-schemas";
import cx from "classnames";

const InitialValues = {
  first_name: "",
  last_name: "",
  display_name: "",
  email: "",
  password: "",
  isJoined: false,
  isAllowed: false,
};

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
      <div className={styles.formik}>
        <Formik
          validationSchema={SIGN_IN_SCHEME}
          validateOnChange={false}
          initialValues={InitialValues}
        >
          {(formikProps) => {
            console.log(formikProps);
            // const stylesErrorsFirst = cx({
            //   [styles.firstErrorsHidden]: !formikProps.errors.first_name,
            //   [styles.firstError]:
            //     formikProps.errors.first_name && formikProps.touched.login,
            // });
            // const stylesErrorsSec = cx({
            //   [styles.firstErrorsHidden]: !formikProps.errors.last_name,
            //   [styles.firstError]:
            //     formikProps.errors.last_name && formikProps.touched.login,
            // });

            return (
              <Form className={styles.loginForm}>
                <h1 className={styles.formHeading}>CREATE AN ACCOUNT</h1>
                <h2 className={styles.formPhrase}>
                  We always keep your name and email address private.
                </h2>
                <div className={styles.allFieldsWrap}>
                  <div className={styles.pairingFields}>
                    <Field
                      className={styles.regForm}
                      name="first_name"
                      placeholder="First name"
                    ></Field>
                    <Field
                      className={styles.regForm}
                      name="last_name"
                      placeholder="Last name"
                    ></Field>
                  </div>

                  <ErrorMessage name="first_name">
                    {(message) => (
                      <div className={styles.errorMes}>{message}</div>
                    )}
                  </ErrorMessage>

                  <ErrorMessage name="last_name">
                    {(message) => (
                      <div className={styles.errorMes}>{message}</div>
                    )}
                  </ErrorMessage>

                  <div className={styles.pairingFields}>
                    <Field
                      className={styles.regForm}
                      name="display_name"
                      placeholder="Display name"
                    ></Field>
                    <Field
                      className={styles.regForm}
                      name="email"
                      placeholder="Email adress"
                    ></Field>
                  </div>
                  <ErrorMessage name="display_name">
                    {(message) => (
                      <div className={styles.errorMes}>{message}</div>
                    )}
                  </ErrorMessage>

                  <ErrorMessage name="email">
                    {(message) => (
                      <div className={styles.errorMes}>{message}</div>
                    )}
                  </ErrorMessage>
                  <div className={styles.pairingFields}>
                    <Field
                      className={styles.regForm}
                      name="password"
                      placeholder="Password"
                    ></Field>
                    <Field
                      className={styles.regForm}
                      name="passwordConf"
                      placeholder="Password confirmation"
                    ></Field>
                  </div>
                  <ErrorMessage name="password">
                    {(message) => (
                      <div className={styles.errorMes}>{message}</div>
                    )}
                  </ErrorMessage>

                  <ErrorMessage name="email_name">
                    {(message) => (
                      <div className={styles.errorMes}>{message}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className={styles.checkboxDiv}>
                  <Field
                    className={styles.checkboxRadio}
                    type="radio"
                    value="buyer"
                    name="isJoined"
                    required
                  ></Field>
                  <h1 className={styles.confirmationText}>Join as a Buyer</h1>
                  <p className={styles.confirmationText2}>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </p>
                </div>
                <div className={styles.checkboxDiv}>
                  <Field
                    className={styles.checkboxRadio}
                    type="radio"
                    value="seller"
                    name="isJoined"
                    required
                  ></Field>
                  <h1 className={styles.confirmationText}>
                    Join As a Creative or Marketplace Seller
                  </h1>
                  <p className={styles.confirmationText2}>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </p>
                </div>
                <div className={styles.allow}>
                  <Field
                    type="checkbox"
                    className={styles.allowCheckbox}
                    name="isAllowed"
                    required
                  ></Field>
                  <p className={styles.allowText}>
                    Allow Squadhelp to send marketing/promotional offers from
                    time to time
                  </p>
                </div>

                <button className={styles.createBtn}>Create account</button>

                <p className={styles.terms}>
                  By clicking this button, you agree to our{" "}
                  <a className={styles.termsLink} href="#">
                    Terms of Service.
                  </a>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}
export default SigInForm;
