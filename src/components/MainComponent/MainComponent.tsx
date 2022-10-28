import React, { FC } from "react";

import styles from "./MainComponent.module.css";

const MainComponent: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__left}>
        <div className={styles.main__left__profile}>
          <img alt="avatar.webp" />
          <span>Billy Isgradov</span>
        </div>
        <nav>
          <ul className={styles.main__left__menu}>
            <li>Discover</li>
            <li>Search</li>
            <li>Favourites</li>
            <li>Playlists</li>
            <li>Charts</li>
          </ul>
        </nav>
      </div>
      <div className={styles.main__right}>as</div>
    </div>
  );
};

export default MainComponent;
