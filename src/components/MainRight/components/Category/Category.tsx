import React, { FC, useState, useRef } from "react";
import { useDarkTheme } from "../../../../hooks/useDarkTheme";
import DataItem from "../DataItem/DataItem";
import { useAppSelector } from "hooks/useAppSelector";

import styles from "./Category.module.css";
import childStyles from "../DataItem/DataItem.module.css";

interface Props {
  categoryName: string;
  categoryType: string;
}

const Category: FC<Props> = (props) => {
  const { noDark } = useDarkTheme();

  const { categoryName, categoryType } = props;
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

  const items = useAppSelector((state: any) => state.common.show[categoryType]);
  const [slideAmount, setSlideAmount] = useState(0);
  const itemRef: any = useRef<Element | null>(null);

  const elWidth = itemRef?.current?.offsetWidth;
  let elMargin = 0;
  if (itemRef.current !== null) {
    const elStyle = window.getComputedStyle(itemRef.current);
    elMargin = +parseInt(elStyle.getPropertyValue("margin-right"));
  }

  const slideLeft = () => {
    setSlideAmount((prev) => prev + elWidth + elMargin);
  };

  const slideRight = () => {
    setSlideAmount((prev) => prev - elWidth - elMargin);
  };

  return (
    <div className={styles.main__right__content__category}>
      <div className={styles.main__right__content__category__top}>
        <span className={styles.main__right__content__category__top__name}>
          <strong>{categoryName}</strong>
        </span>
        <div className={styles.main__right__content__category__top__line} />
        <div className={leftControlStyle} onClick={slideLeft} />
        <div className={rightControlStyle} onClick={slideRight} />
      </div>
      <div className={styles.main__right__content__category__data}>
        <div
          className={styles.main__right__content__category__data__wrapper}
          style={{ transform: `translate(${slideAmount}px)` }}
        >
          {items.map((el: any) => {
            return (
              <div key={el.id}>
                <DataItem item={el} ref={itemRef} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
