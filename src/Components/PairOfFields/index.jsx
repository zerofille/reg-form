import React from "react";
import styles from "./style.module.scss";
import { Field } from "formik";

function PairOfFields(props) {
  const { firstName, firstPlHold, secName, secPlHold } = props;
  return (
    <div className={styles.pairingFields}>
      <Field
        className={styles.regForm}
        name={firstName}
        placeholder={firstPlHold}
      ></Field>
      <Field
        className={styles.regForm}
        name={secName}
        placeholder={secPlHold}
      ></Field>

      
    </div>
  );
}

export default PairOfFields;
