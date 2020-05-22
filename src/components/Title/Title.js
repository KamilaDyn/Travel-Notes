import React from "react";
import styles from "./Title.module.css";

const Title = ({ children, subtitle, ...props }) => {
  const titleClass = subtitle ? styles.subtitle : styles.h1;
  return (
    <>
      <h1 className={titleClass} {...props}>
        {children}
      </h1>
    </>
  );
};

export default Title;
