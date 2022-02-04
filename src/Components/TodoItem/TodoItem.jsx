import React from "react";
import Style from "./TodoItem.module.css";

const TodoItem = ({ post }) => {
  return (
    <div className={Style.post}>
      <div className="post__content">
        <strong>
          {post.id} {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btn">
        <button>удалить</button>
      </div>
    </div>
  );
};

export default TodoItem;
