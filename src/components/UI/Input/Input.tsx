import React, { FC } from "react";

import styles from "./Input.module.css";

const Input: FC<any> = (props) => {
  return (
    <input
      {...props}
      type={props.type ? props.type : "text"}
      className={styles.input + " " + props.className}
    />
  );
};

export default Input;
