import React, { ReactElement } from "react";
import styles from "./index.module.scss";
//import logo from "./logo.svg";

const Header = (): ReactElement => {
  return (
    <div className={styles.headerContainer}>
      <img src="/logo.svg" alt="ipu-cgpa-calculator" />
    </div>
  );
};

export default Header;
