import { React, useState, useMemo } from "react";
import styles from "./styles.module.scss";
import ModalPopUp from "../../../../commonComp/Modal";
import { storePost, getPost } from "../../../../apis/firestore";
import PostCards from "../PostCards";
import getCurrentTimeStamp from "../../../../helperFunctions/getTime";

export default function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [textPost, setTextPost] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  async function sendPost() {
    const postData = {
      stringPost: textPost,
      timeStamp: getCurrentTimeStamp("LLL"),
      email: localStorage.getItem("user-email"),
    }; //Sending in this object to be stored in the collection
    console.log("This is the post data submitted: ", postData);
    await storePost(postData);
    await setModalOpen(false);
    await setTextPost("");
  }
  function toggleModal() {
    setModalOpen(false);
  }
  useMemo(() => {
    getPost(setAllPosts);
  }, []);
  const renderPosts = allPosts.map((posts) => {
    return (
      <PostCards stringPost={posts.stringPost} timeStamp={posts.timeStamp} />
    );
  });
  return (
    <div className={styles["post--main-container"]}>
      <div className={styles["post--start-post-main-container"]}>
        <div className={styles["post--start-post"]}>
          <button
            className={styles["post--start-post-button"]}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Start a post
          </button>
        </div>
        <ModalPopUp
          modalOpen={modalOpen}
          toggleModalOpen={toggleModal}
          setPostText={setTextPost}
          postText={textPost}
          sendPost={sendPost}
        />
      </div>
      <div className={styles["post--cards-container"]}>{renderPosts}</div>
    </div>
  );
}
