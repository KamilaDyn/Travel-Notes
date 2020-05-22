import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.css";

const Input = ({ tag: Tag, name, maxLength, label, error, ...props }) => {
  return (
    <div className={styles.formItem}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <Tag
        className={Tag === "textarea" ? styles.textarea : styles.input}
        type="text"
        name={name}
        id={name}
        maxLength={maxLength}
        {...props}
        data-error={error}
      />
    </div>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
};

Input.defaultProps = {
  tag: "input",
  maxLength: 200,
};

export default Input;
