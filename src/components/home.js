import React from "react";
// import NewPostForm from "./NewPostForm";
import SearchBar from "./SearchBar";
import PostResults from "./PostResults";

function Home({ posts, setSearchResults, searchResults }) {
  return (
    <div>
      <h1>Find the perfect caretaker for your fluffy friend here!</h1>

      <div className="content">
        {/* <section className="newPost">
          <h1>Add Post:</h1>
          <NewPostForm posts={posts} setPosts={setPosts} />
        </section> */}

        <section>
          <SearchBar posts={posts} setSearchResults={setSearchResults} />
        </section>
        <section>
          <PostResults searchResults={searchResults} />
        </section>
      </div>
    </div>
  );
}

export default Home;
