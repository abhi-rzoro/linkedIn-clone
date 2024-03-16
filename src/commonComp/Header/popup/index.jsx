import React from "react";
import styles from "./styles.module.scss";
import { logOut } from "../../../apis/AuthApi";

export default function PopUp(props) {
  return props.popState ? (
    <div className={styles["popup--main-container"]}>
      <p className={styles["popup--logout"]} onClick={logOut}>
        Log out
      </p>
    </div>
  ) : null;
}
