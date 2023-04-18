import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Form from "./Form";

import "flowbite";

export default function Modal({
  setOpenModal,
  postData,
  setPostData,
  createPost,
  updatePost,
  setCurrentId,
  currentId,
}) {
  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentId();
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (currentId) {
      updatePost(currentId);
    } else {
      createPost();
    }
    setOpenModal(false);
  };

  return (
    <div className="bg z-10 fixed w-screen h-screen top-0 left-0 bg-white flex flex-col items-center">
      <div className="flex items-center justify-between w-screen p-5 ">
        <h1>{currentId ? "Editing" : "Adding"}</h1>

        <CloseIcon
          type="submit"
          onClick={handleCloseModal}
          className=" hover:border-2 hover:rounded-full"
        />
      </div>

      <Form
        postData={postData}
        setPostData={setPostData}
        createPost={createPost}
        setOpenModal={setOpenModal}
        setCurrentId={setCurrentId}
        handleSave={handleSave}
      />
    </div>
  );
}
