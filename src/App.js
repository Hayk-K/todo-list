import React from "react";
import "./App.css";
import MySelect from "./Components/MySelect/MySelect";
import PostForm from "./Components/PostForm/PostForm";
import PostList from "./Components/PostList/PostList";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [selectSort, setSelectSort] = React.useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPost = (sort) => {
    setSelectSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr />
      <MySelect
        defaultValue="Sorting"
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
        value={selectSort}
        onChange={sortPost}
      />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} />
      ) : (
        <h1>No cases</h1>
      )}
    </div>
  );
}

export default App;
