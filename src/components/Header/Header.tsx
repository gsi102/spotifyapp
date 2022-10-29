import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDarkTheme } from "../../hooks/useDarkTheme";
import { setTheme } from "../../store/reducers/commonSlice";
import { THEMES_NAMES } from "../../const/const";

import styles from "./Header.module.css";

const [DAY, NIGHT] = [THEMES_NAMES.DAY, THEMES_NAMES.NIGHT];

const Header: FC = () => {
  const currentTheme = useAppSelector((state) => state.common.theme);
  const dispatch = useAppDispatch();
  const { noDark } = useDarkTheme();

  const changeTheme = (theme: string) => {
    if (currentTheme !== theme) {
      dispatch(setTheme({ data: theme }));
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  };
  return (
    <div className={styles.main__right__header}>
      <div className={styles.main__right__header__logo}>
        <img
          alt="logo.png"
          className={styles.main__right__header__logo__img + " " + noDark}
        />
      </div>
      <div className={styles.main__right__header__text}>
        <p className={styles.main__right__header__header}>
          Your favourite tunes
        </p>
        <p className={styles.main__right__header__text__themes}>
          All
          <span className={styles.day} onClick={() => changeTheme(DAY)} />
          and all
          <span className={styles.night} onClick={() => changeTheme(NIGHT)} />
        </p>
      </div>
    </div>
  );
};

export default Header;
