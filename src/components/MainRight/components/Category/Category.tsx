import React, { FC } from "react";
import { useDarkTheme } from "../../../../hooks/useDarkTheme";

import styles from "./Category.module.css";

interface Props {
  categoryName: string;
}

const Category: FC<Props> = (props) => {
  const { noDark } = useDarkTheme();
  const leftControlStyle = [
    styles.main__right__content__category__top__controls,
    styles.controlsLeft,
    noDark,
  ].join(" ");

  const rightControlStyle = [
    styles.main__right__content__category__top__controls,
    styles.controlsRight,
    noDark,
  ].join(" ");
  const categoryName = props.categoryName;

  return (
    <div className={styles.main__right__content__category}>
      <div className={styles.main__right__content__category__top}>
        <span className={styles.main__right__content__category__top__name}>
          <strong>{categoryName}</strong>
        </span>
        <div className={styles.main__right__content__category__top__line} />
        <div className={leftControlStyle} />
        <div className={rightControlStyle} />
      </div>
      <div className={styles.main__right__content__category__data}></div>
    </div>
  );
};

export default Category;
