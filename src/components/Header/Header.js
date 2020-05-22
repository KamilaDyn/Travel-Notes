import React from "react";
import styles from "./Header.module.css";
import Menu from "../Menu/Menu";
import Title from "../Title/Title";

const Header = ({ showSidebarFn, title }) => (
  <>
    <Menu onClick={showSidebarFn}>Menu</Menu>
    <div className={styles.header}>
      <Title>Travel Notes</Title>
      <div className={styles.underline}></div>
    </div>
  </>
);

export default Header;
