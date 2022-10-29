import { useDarkTheme } from "../../../../hooks/useDarkTheme";
import React, { FC, useCallback } from "react";

import styles from "./DataItem.module.css";

import { db } from "../../../../services/firebaseRequestsConfig";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

const DataItem: FC<any> = (props) => {
  const { noDark } = useDarkTheme();

  let target = null;
  if (props.item.icons) {
    target = "icons";
  } else target = "images";

  const url = props.item[target][0].url;
  let { href, name, id, type } = props.item;

  const onClick = useCallback(() => {
    let spotifyCode = localStorage.getItem("spotify_code");
    if (spotifyCode) {
      spotifyCode = JSON.parse(spotifyCode);
      const addToFavorites = async () => {
        if (!type) type = "genre";

        // @ts-ignore
        const usersRef = doc(
          db,
          "users",
          spotifyCode,
          "favourites",
          spotifyCode
        );
        const response = await setDoc(usersRef, {
          name: name,
          href: href,
          type: type,
        }).catch((e) => console.error(e));

        return response;
      };

      addToFavorites().catch((e) => console.error(e));
    }
  }, []);

  return (
    <div
      className={styles.main__right__content__category__data__item}
      onClick={onClick}
    >
      <img src={url} alt="dataitem.jpg" className={noDark} />
      <p>{name}</p>
    </div>
  );
};

export default DataItem;
