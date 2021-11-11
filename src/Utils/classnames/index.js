import cx from "classnames";
import styles from "./style.module.scss";

import React from "react";

function cxFunc(props) {
  const { formikProps } = props;
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

  return <div>null</div>;
}

export default cxFunc;
