import React, { FC } from "react";
import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./MainLeft.module.css";

const MainLeft: FC = () => {
  const { noDark } = useDarkTheme();

  return (
    <div className={styles.main__left}>
      <div className={styles.main__left__profile}>
        <img
          className={styles.main__left__profile__img + " " + noDark}
          alt="avatar.webp"
        />
        <span className={styles.main__left__profile__name}>Billy Isgradov</span>
      </div>
      <nav>
        <ul className={styles.main__left__menu}>
          <li className={styles.main__left__menu__discover}>
            <span>Discover</span>
          </li>
          <li className={styles.main__left__menu__search}>
            <span>Search</span>
          </li>
          <li className={styles.main__left__menu__favourites}>
            <span>Favourites</span>
          </li>
          <li className={styles.main__left__menu__playlists}>
            <span>Playlists</span>
          </li>
          <li className={styles.main__left__menu__charts}>
            <span>Charts</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainLeft;
