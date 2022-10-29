import React, { FC, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useDarkTheme } from "../../hooks/useDarkTheme";
import { filterItems } from "../../store/reducers/commonSlice";
import Input from "../UI/Input/Input";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import styles from "./MainLeft.module.css";

const MainLeft: FC = () => {
  const dispatch = useAppDispatch();
  const { noDark } = useDarkTheme();

  const [activeSearch, setActiveSearch] = useState("");

  const onSearch = () => {
    if (!activeSearch) {
      setActiveSearch(styles.activeSearch);
    } else {
      setActiveSearch("");
    }
  };

  const onInputChange = useDebounce((text: string) => {
    if (text.length === 0) return dispatch(filterItems({ searchInput: null }));
    dispatch(filterItems({ searchInput: text }));
  }, 300);

  return (
    <div className={styles.main__left}>
      <div className={styles.main__left__profile}>
        <img
          className={styles.main__left__profile__img + " " + noDark}
          alt="avatar.webp"
        />
        <span className={styles.main__left__profile__name}>Billy Isgradov</span>
      </div>
      <div>
        <div className={styles.searchField + " " + activeSearch}>
          <Input onInputChange={onInputChange} />
        </div>
        <nav>
          <ul className={styles.main__left__menu}>
            <li className={styles.main__left__menu__discover}>
              <span>Discover</span>
            </li>
            <li className={styles.main__left__menu__search} onClick={onSearch}>
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
    </div>
  );
};

export default MainLeft;
