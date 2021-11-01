import React from "react";
import styles from "./style.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import{LOGIN_SCHEME} from '../../Utils/Validation-schemas'
const initialValues={
  login:'',
  password:''
}
}
function LoginForm() {
  const submitForm = (values, formikBag) => formikBag.resetForm();
  return (
    <section className={styles.wholeSection}>
      <div className={styles.header}>
        <a className={styles.logo} href="#">
          <img src="https://www.squadhelp.com/img/logo.png" />
        </a>
        <button className={styles.signUpBtn}>Signup</button>
      </div>

      <Formik onSubmit={submitForm} className={styles.formik} validationSchema={LOGIN_SCHEME}>
        <Form className={styles.loginForm}>
          <h1 className={styles.formHeading}>LOGIN TO YOUR ACCOUNT</h1>
          <Field
            className={styles.field}
            name="login"
            type="text"
            placeholder="Email adress"
          ></Field>
          <ErrorMessage name="text">
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
              <Field type="checkbox" />{" "}
              <p className={styles.checkboxText}>Remember me</p>{" "}
            </div>
            <div>
              <a  className={styles.passwordLink} href="#">Forgot pasword</a>
            </div>
          </div>
          <button className={styles.logBtn}>LOGIN</button>
        </Form>
      </Formik>
    </section>
  );
}
export default LoginForm;
