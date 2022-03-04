import React from "react";

import styles from "./Button.module.scss";

function Button(props) {
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
