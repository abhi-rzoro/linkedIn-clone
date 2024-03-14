import React from "react";
import { Modal, Button } from "antd";
import styles from "./styles.module.scss";

const ModalPopUp = (props) => {
  return (
    <>
      <Modal
        title="Start a post"
        footer={[
          <Button
            key="submit"
            type="primary"
            disabled={props.postText.length > 0 ? false : true}
            onClick={props.sendPost}
          >
            Submit
          </Button>,
        ]}
        centered
        open={props.modalOpen}
        onOk={props.toggleModalOpen}
        onCancel={props.toggleModalOpen}
      >
        <input
          className={styles["modal--post-input"]}
          placeholder="What do you want to talk about?"
          value={props.postText}
          onChange={(event) => props.setPostText(event.target.value)}
        />
      </Modal>
    </>
  );
};
export default ModalPopUp;
