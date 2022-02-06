import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Style from "./PostList.module.css";

const PostList = ({ posts, remove }) => {
  return (
    <div className={Style.post}>
      {posts.map((post, index) => {
        return <TodoItem remove={remove} number={index + 1} post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
