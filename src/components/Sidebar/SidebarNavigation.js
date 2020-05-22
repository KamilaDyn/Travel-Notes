import React from "react";
import styles from "./SidebarNavigation.module.css";
import { NavLink } from "react-router-dom";

const SidebarNavigation = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <NavLink className={styles.navItemLink} to="/">
          Konta-Instagram
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.navItemLink} to="/list">
          Lista podróży
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.navItemLink} to="/links">
          Przydatne linki
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default SidebarNavigation;
