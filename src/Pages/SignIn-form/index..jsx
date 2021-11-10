import styles from "./style.module.scss";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SIGN_IN_SCHEME } from "../../Utils/Validation-schemas";
import ErrorMes from "../../Components/ErrorMessage";
import cx from "classnames";

const InitialValues = {
  first_name: "",
  last_name: "",
  display_name: "",
  email: "",
  password: "",
  passwordConf: "",
  isJoined: false,
  isAllowed: false,
  isShownPassword: false,
};

function SigInForm() {
  const submitForm = (values, formikBag) => formikBag.resetForm();

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
          onSubmit={submitForm}
        >
          {(formikProps) => {
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

                  <ErrorMes name="first_name" />

                  <ErrorMes name="last_name" />

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
                  <ErrorMes name="display_name" />

                  <ErrorMes name="email" />
                  <div className={styles.pairingFields}>
                    <Field
                      className={styles.regForm}
                      name="password"
                      placeholder="Password"
                      type="password"
                    ></Field>
                    <Field
                      className={styles.regForm}
                      name="passwordConf"
                      placeholder="Password confirmation"
                      type="password"
                    ></Field>
                  </div>
                  <ErrorMes name="password" />

                  <ErrorMes name="passwordConf" />
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

                <button className={styles.createBtn} type="submit">
                  Create account
                </button>

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
