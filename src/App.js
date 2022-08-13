import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Signup from "./components/SignUp";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { getPosts } from "./api/PostAPi";
import { Nav, Navbar, Container } from "react-bootstrap";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect((posts) => {
    getPosts(posts, setPosts);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
              <Navbar.Brand href="#Home">Fluffy Friends</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>

                  <Nav.Link as={Link} to={"/login"}>
                    Log in
                  </Nav.Link>

                  <Nav.Link as={Link} to={"/signup"}>
                    Become a member
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>

        <div>
          <Routes>
            <Route
              path="/"
              element={<Home posts={posts} setPosts={setPosts} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
