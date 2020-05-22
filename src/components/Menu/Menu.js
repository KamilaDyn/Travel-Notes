import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ children, ...props }) => (
  <>
    <button className={styles.menuButton} {...props}>
      {children}
    </button>
  </>
);

export default Menu;
