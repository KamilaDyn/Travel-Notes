import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, secondary, ...props }) => {
  const buttonClass = secondary ? styles.secondary : styles.button;

  return (
    <>
      <button className={buttonClass} {...props}>
        {children}
      </button>
    </>
  );
};

// const Button = ({ children, active, isActive, ...props }) => {
//   let classname = "button";
//   if (isActive === true) {
//     classname = "button active";
//   }
//   return (
//     <button onClick={active} className={classname} {...props}>
//       {children}
//     </button>
//   );
// };

export default Button;
