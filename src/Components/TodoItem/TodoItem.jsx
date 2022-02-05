import React from "react";
import MyButton from "../MyButton/MyButton";
import Style from "./TodoItem.module.css";

const TodoItem = ({ post, number }) => {
  return (
    <div className={Style.post}>
      <div className="post__content">
        <strong>
          {number} {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btn">
        <MyButton>Delete</MyButton>
      </div>
    </div>
  );
};

export default TodoItem;
