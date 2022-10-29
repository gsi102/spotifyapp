import { useDarkTheme } from "../../../../hooks/useDarkTheme";
import React, { FC } from "react";

import styles from "./DataItem.module.css";

const DataItem = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const { noDark } = useDarkTheme();

  let target = null;
  if (props.item.icons) {
    target = "icons";
  } else target = "images";

  const url = props.item[target][0].url;
  const name = props.item.name;
  return (
    <div
      className={styles.main__right__content__category__data__item}
      ref={ref}
    >
      <img src={url} alt="dataitem.jpg" className={noDark} />
      <p>{name}</p>
    </div>
  );
});

export default DataItem;
