import React from "react";
import styles from "./Link.module.css";

const Link = () => (
  <div>
    <ul className={styles.link}>
      <li className={styles.item}>
        <p> Travel's Instagram</p>
      </li>
      <li className={styles.item}>
        <p> Travel's Tips</p>
      </li>
      <li className={styles.item}>
        <p> Usful Links</p>
      </li>
    </ul>
  </div>
);
export default Link;
