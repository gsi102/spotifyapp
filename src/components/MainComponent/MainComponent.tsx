import React, { FC } from "react";
import { useDarkTheme } from "../../hooks/useDarkTheme";
import MainLeft from "../MainLeft/MainLeft";
import MainRight from "../MainRight/MainRight";

import styles from "./MainComponent.module.css";

const MainComponent: FC = () => {
  const { dark } = useDarkTheme();

  return (
    <div className={styles.main + " " + dark}>
      <MainLeft />
      <MainRight />
    </div>
  );
};

export default MainComponent;
