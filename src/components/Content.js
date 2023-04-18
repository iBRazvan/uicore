import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "./Modal";
import CardComponent from "./CardComponent";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function Content() {
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState();
  const [openModal, setOpenModal] = useState(false);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getUsers = async () => {
      const dataBE = await getDocs(postsCollectionRef);
      setData(dataBE.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  useEffect(() => {
    const postFindById = data.find((postData) => postData.id === currentId);
    postFindById ? setPostData(postFindById) : setPostData();
  }, [data, currentId]);

  const [postData, setPostData] = useState({
    name: "",
    access: "",
    purpose: "",
    mode: "",
    reference: "",
    limit: "",
    context: "",
    source: "",
  });

  const createPost = async () => {
    await addDoc(postsCollectionRef, postData);
    const dataBE = await getDocs(postsCollectionRef);
    const newData = dataBE.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(newData);
  };

  const updatePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    const newPost = { ...postData };
    await updateDoc(postDoc, newPost);
    const dataBE = await getDocs(postsCollectionRef);
    const newData = dataBE.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(newData);
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    const postExists = (await getDoc(postDoc)).exists();

    if (postExists) {
      await deleteDoc(postDoc);
      const dataBE = await getDocs(postsCollectionRef);
      const newData = dataBE.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(newData);
    } else {
      console.log(`Document with id ${id} does not exist`);
    }
  };

  const handleModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      {openModal && (
        <Modal
          postData={postData}
          setPostData={setPostData}
          setOpenModal={setOpenModal}
          currentId={currentId}
          setCurrentId={setCurrentId}
          createPost={createPost}
          updatePost={updatePost}
          data={data}
        />
      )}
      <div className=" w-full max-w[65ch] mx-auto flex flex-col items-center justify-center gap-3 ">
        <div className="flex pb-[5rem]">
          <AddIcon
            onClick={handleModal}
            className="hover:border-2 hover:rounded-full
          "
            alt="addicon"
          />
        </div>
        <div className="flex flex-col gap-10">
          {!data.length ? (
            <h1>No data for fetching!</h1>
          ) : (
            data.map((post) => (
              <CardComponent
                post={post}
                key={post.id}
                setCurrentId={setCurrentId}
                handleModal={handleModal}
                data={data}
                setData={setData}
                deletePost={deletePost}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
