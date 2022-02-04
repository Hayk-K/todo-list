import React from "react";
import "./App.css";
import PostList from "./Components/PostList/PostList";


function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Java", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
