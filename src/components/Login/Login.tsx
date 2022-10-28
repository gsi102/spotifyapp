import Button from "../UI/Button/Button";
import React, { FC } from "react";

import styles from "./Login.module.css";

const Login: FC = () => {
  const signIn = () => {
    window.location.href = "https://ya.ru";
    return null;
  };

  return (
    <div className={styles.login}>
      <p>Please, sign in into your Spotify account at first.</p>
      <Button className={styles.login__btn} onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
