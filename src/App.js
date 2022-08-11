import "./App.css";
import axios from "axios";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Signup from "./components/SignUp";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import NewPostForm from "./components/NewPostForm";

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   getPosts();
  // }, []);

  const addPost = (title, author, content) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
        title,
        author,
        content,
      })
      .then((result) => {
        const newPost = {
          post_id: result.data.post.post_id,
          title: result.data.post.title,
          author: result.data.post.owner,
        };
        setPosts([...posts, newPost]);
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1> My Fuffy Friend</h1>
          <Link to="/">Home</Link>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Become a member</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <section className="newPost">
        <h1>Add Post:</h1>
        <NewPostForm onAddPostCallback={addPost} />
      </section>
    </div>
  );
}

export default App;
