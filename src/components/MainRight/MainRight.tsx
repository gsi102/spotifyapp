import Header from "../Header/Header";
import React, { FC, useEffect } from "react";
import Category from "./components/Category/Category";
import { useLazyGetDataQuery } from "../../services/spotifyAppService";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setCategoryItems } from "../../store/reducers/commonSlice";

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
  const [lazyGetData] = useLazyGetDataQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSpotifyData = async (
      browseData: string,
      responseType: string,
      updateTarget: string
    ) => {
      let accessToken: string | null = localStorage.getItem("access_token");
      if (accessToken) {
        accessToken = JSON.parse(accessToken);
      }
      const response = await lazyGetData({ accessToken, type: browseData })
        .unwrap()
        .then((res) => {
          const items = [...res[responseType].items];
          dispatch(setCategoryItems({ type: updateTarget, data: items }));
        })
        .catch((e) => console.error(e));
      return response;
    };

    Promise.all([
      getSpotifyData("browse/new-releases", "albums", "newReleases"),
      getSpotifyData("browse/featured-playlists", "playlists", "featured"),
      getSpotifyData("browse/categories", "categories", "browse"),
    ]).catch((e) => console.error(e));
  }, []);

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
