import React from "react";
import "./App.css";
import PostForm from "./Components/PostForm/PostForm";
import PostList from "./Components/PostList/PostList";

function App() {
  const [posts, setPosts] = React.useState([]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
