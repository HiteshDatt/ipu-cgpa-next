import React, { ReactElement } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const Header = (): ReactElement => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <Image
          src="/logo.png"
          alt="ipu-cgpa-calculator"
          width={200}
          height={150}
          priority={true}
        />
      </div>
    </header>
  );
};

export default Header;
