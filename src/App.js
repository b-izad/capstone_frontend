import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { getPosts } from "./api/PostAPi";
import { Nav, Navbar, Container } from "react-bootstrap";
import NewPost from "./components/NewPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect((posts) => {
    getPosts(posts, setPosts, setSearchResults);
  }, []);

  // useEffect(() => {
  //   getPosts().then((json) => {
  //     setPosts(json);
  //     setSearchResults(json);
  //   });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <>
            <Navbar bg="dark" variant={"dark"} expand="lg">
              <Container fluid>
                <Navbar.Brand as={Link} to={"/"}>
                  Fluffy Friends
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link as={Link} to={"/"} className="navbarRight">
                      Home
                    </Nav.Link>

                    <Nav.Link as={Link} to={"/login"}>
                      Login
                    </Nav.Link>

                    <Nav.Link as={Link} to={"/signup"}>
                      Become a member
                    </Nav.Link>

                    <Nav.Link as={Link} to={"/newpost"}>
                      Add Post
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
                element={
                  <Home
                    // posts={posts}
                    // setPosts={setPosts}
                    setSearchResults={setSearchResults}
                    searchResults={searchResults}
                  />
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/newpost" element={<NewPost />} />
              <Route path="*" element={"404 Error: Page Not Found"} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
