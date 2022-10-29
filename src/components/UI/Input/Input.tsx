import React, { FC, useState } from "react";

import styles from "./Input.module.css";

const Input: FC<any> = (props) => {
  const parentCb = props.onInputChange;

  const [inputValue, setInputValue] = useState("");
  const onChange = (e: any) => {
    setInputValue(e.target.value);
    parentCb(e.target.value);
  };

  return (
    <input
      value={inputValue}
      onChange={onChange}
      type={props.type ? props.type : "text"}
      className={styles.input + " " + props.className}
    />
  );
};

export default Input;
