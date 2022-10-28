import React, { FC } from "react";
import { useDarkTheme } from "../../../../hooks/useDarkTheme";

import styles from "./Category.module.css";

interface Props {
  categoryName: string;
}

const Category: FC<Props> = (props) => {
  const { noDark } = useDarkTheme();

  const categoryName = props.categoryName;

  const leftControlStyle = [
    styles.main__right__content__category__controls,
    styles.controlsLeft,
    noDark,
  ].join(" ");

  const rightControlStyle = [
    styles.main__right__content__category__controls,
    styles.controlsRight,
    noDark,
  ].join(" ");

  return (
    <div className={styles.main__right__content__category}>
      <span className={styles.main__right__content__category__name}>
        <strong>{categoryName}</strong>
      </span>
      <div className={styles.main__right__content__category__line} />
      <div className={leftControlStyle} />
      <div className={rightControlStyle} />
    </div>
  );
};

export default Category;
