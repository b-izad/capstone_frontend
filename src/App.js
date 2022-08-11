import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Signup from "./components/SignUp";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { getPosts } from "./api/PostAPi";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(posts, setPosts);
  }, []);

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
          <Route
            path="/"
            element={<Home posts={posts} setPosts={setPosts} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
