import React from "react";
import styles from "./style.module.scss";
import { ErrorMessage } from "formik";
function ErrorMes(props) {
  const { name } = props;
  return (
    
    <ErrorMessage name={name}>
      {(message) => <div className={styles.errorMes}>{message}</div>}
    </ErrorMessage>
  );
}

export default ErrorMes;
