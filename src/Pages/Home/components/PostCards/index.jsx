import React from "react";
import styles from "./styles.module.scss";

export default function PostCards(props) {
  return (
    <div className={styles["card--main-container"]}>
      <p className={styles["card--time-stamp"]}>{props.timeStamp}</p>
      <p className={styles["card--post-text"]}>{props.stringPost}</p>
    </div>
  );
}
