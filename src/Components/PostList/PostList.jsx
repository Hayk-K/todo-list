import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const PostList = ({posts}) => {
  return (
    <div>
        <h1>Post list</h1>
      {posts.map((post) => {
        return <TodoItem post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
