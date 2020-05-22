import React from "react";
import styles from "./Modal.module.css";
import Form from "../Form/Form";

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button className={styles.closeModule} onClick={closeModalFn}></button>
    <Form />
  </div>
);

export default Modal;
