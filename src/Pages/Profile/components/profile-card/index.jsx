import { React, useState, useMemo, useEffect } from "react";
import { getPost } from "../../../../apis/firestore";
import PostCards from "../../../Home/components/PostCards";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { getSelectedPost, getSelectedUser } from "../../../../apis/firestore";

export default function ProfileCard(props) {
  const [allPosts, setAllPosts] = useState([]);
  const [allSelectedPosts, setAllSelectedPosts] = useState();
  const [allSelectedUsers, setAllSelectedUsers] = useState();
  const location = useLocation();
  const [renderPosts, setRenderPosts] = useState();
  const [renderUser, setRenderUser] = useState();

  useMemo(() => {
    getPost(setAllPosts);
    getSelectedPost(location?.state?.userEmail, setAllSelectedPosts);
  }, []);
  useMemo(() => {
    getSelectedUser(location?.state?.userEmail, setAllSelectedUsers);
  }, []);
  console.log("This is the link state", location?.state?.userEmail);
  console.log("This is the selected posts ", allSelectedPosts);
  console.log("This is the selected user ", allSelectedUsers);

  useEffect(() => {
    console.log("use effect ran");
    setRenderPosts(
      allSelectedPosts?.map((posts) => {
        return (
          <PostCards
            stringPost={posts.stringPost}
            timeStamp={posts.timeStamp}
            name={posts.currentUserName}
          />
        );
      })
    );
  }, [allSelectedPosts]);

  useEffect(() => {
    console.log("use effect for user ran ", renderUser);
    setRenderUser(allSelectedUsers);
  }, [allSelectedUsers]);

  return (
    <div>
      <div className={styles["profileC--main-container"]}>
        <div className={styles["profileC--edt-button"]}>
          <button onClick={props.showProfile}>Edit</button>
        </div>
        <div className={styles["profileC--info-container"]}>
          <div>
            <p className={styles["profileC--user-name"]}>
              {allSelectedUsers?.name}
            </p>
            <p className={styles["profileC--headline"]}>
              {allSelectedUsers?.headline}
            </p>
            <p className={styles["profileC--headline"]}>
              {allSelectedUsers?.location}
            </p>
          </div>
          <div className={styles["profileC--info-right"]}>
            <p> {allSelectedUsers?.college}</p>
            <p> {allSelectedUsers?.company}</p>
          </div>
        </div>
      </div>
      <div className={styles["profileC--post-main-container"]}>
        {renderPosts}
      </div>
    </div>
  );
}
