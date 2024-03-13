import { Spin } from "antd";
import React from "react";
import styles from "./styles.module.scss";

export default function Spinner() {
  return (
    <div className={styles["loading--main-container"]}>
      <Spin size="large" />
      <p className={styles["loading--text"]}>Loading... Please wait</p>
    </div>
  );
}
