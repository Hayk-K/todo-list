import React from "react";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";

const PostForm = ({ create }) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    create(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <MyInput
        type="text"
        placeholder="Post descriptions"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
