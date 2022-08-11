import React from "react";
import NewPostForm from "./NewPostForm";
import addPost from "../api/PostAPi";

function Home() {
  return (
    <div>
      <h1>Find the perfect caretaker for your fluffy friend here!</h1>

      <div className="content">
        <section className="newPost">
          <h1>Add Post:</h1>
          <NewPostForm onAddPostCallback={addPost} />
        </section>
      </div>
    </div>
  );
}

export default Home;
