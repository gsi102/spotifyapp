import Header from "../Header/Header";
import React, { FC } from "react";
import Category from "./components/Category/Category";

import styles from "./MainRight.module.css";

const [CAT_ONE, CAT_TWO, CAT_THREE] = [
  "RELEASED THIS WEEK",
  "FEATURED PLAYLISTS",
  "BROWSE",
];

const [CAT_TYPE_ONE, CAT_TYPE_TWO, CAT_TYPE_THREE] = [
  "newReleases",
  "featured",
  "browse",
];

const MainRight: FC = () => {
  return (
    <div className={styles.main__right}>
      <Header />
      <div className={styles.main__right__content}>
        <Category categoryName={CAT_ONE} categoryType={CAT_TYPE_ONE} />
        <Category categoryName={CAT_TWO} categoryType={CAT_TYPE_TWO} />
        <Category categoryName={CAT_THREE} categoryType={CAT_TYPE_THREE} />
      </div>
    </div>
  );
};

export default MainRight;
