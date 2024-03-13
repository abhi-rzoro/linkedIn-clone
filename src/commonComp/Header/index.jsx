import React from "react";
import styles from "./styles.module.scss";
import logoSmall from "./images/linkedin-logo-small.png";

export default function Header() {
  return (
    <div className={styles["header--main-container"]}>
      <img src={logoSmall} className={styles["header--logo"]} />
    </div>
  );
}
