import React, { FC } from "react";

import styles from "./Button.module.css";

const Button: FC<any> = (props) => {
  return (
    <button {...props} className={styles.button + " " + props.className} />
  );
};

export default Button;
