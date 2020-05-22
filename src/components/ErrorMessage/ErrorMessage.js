import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorsMessage = ({ formErrors }) => (
  <div className={styles.formErrors}>
    {formErrors.length > 0 ? <p>{formErrors}</p> : null}
  </div>
);

export default ErrorsMessage;
