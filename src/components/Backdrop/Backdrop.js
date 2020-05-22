import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = ({ click, ...props }) => (
  <div className={styles.backdrop} onClick={click} {...props}></div>
);
export default Backdrop;
