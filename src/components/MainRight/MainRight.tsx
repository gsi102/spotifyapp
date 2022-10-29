import Header from "../Header/Header";
import React, { FC, useEffect } from "react";
import Category from "./components/Category/Category";
import { useLazyGetDataQuery } from "../../services/spotifyAppService";

import styles from "./MainRight.module.css";

const [CAT_ONE, CAT_TWO, CAT_THREE] = [
  "RELEASED THIS WEEK",
  "FEATURED PLAYLISTS",
  "BROWSE",
];

const MainRight: FC = () => {
  const [lazyGetData] = useLazyGetDataQuery();

  useEffect(() => {
    const test = async () => {
      let accessToken: string | null = localStorage.getItem("access_token");
      if (accessToken) {
        accessToken = JSON.parse(accessToken);
      }
      const response = await lazyGetData({ accessToken, type: null })
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.error(e));
      return response;
    };

    test();
  }, []);

  return (
    <div className={styles.main__right}>
      <Header />
      <div className={styles.main__right__content}>
        <Category categoryName={CAT_ONE} />
        <Category categoryName={CAT_TWO} />
        <Category categoryName={CAT_THREE} />
      </div>
    </div>
  );
};

export default MainRight;
