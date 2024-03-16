import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function PostCards(props) {
  console.log("this is the post card props:", props);
  return (
    <div className={styles["card--main-container"]}>
      <Link to="/profile" state={{ userEmail: props.email }}>
        <p className={styles["card--post-text"]}>{props.name}</p>
      </Link>
      <p className={styles["card--time-stamp"]}>{props.timeStamp}</p>
      <p className={styles["card--post-text"]}>{props.stringPost}</p>
    </div>
  );
}
