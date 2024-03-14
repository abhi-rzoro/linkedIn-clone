import { React, useState } from "react";
import styles from "./styles.module.scss";
import ModalPopUp from "../../../../commonComp/Modal";
import { storePost } from "../../../../apis/firestore";

export default function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [textPost, setTextPost] = useState("");

  async function sendPost() {
    await storePost(textPost);
    await setModalOpen(false);
    await setTextPost("");
  }
  function toggleModal() {
    setModalOpen(false);
  }
  return (
    <div className={styles["post--main-container"]}>
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
  );
}
